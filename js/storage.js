export const STORAGE_KEY = "d10_focus_complete_v1";

export function createDefaultData() {
  return {
    tasks: [],
    xp: 0,
    coins: 0,
    sessions: 0,
    completedDates: [],
    unlocked: []
  };
}

function normalizeTask(task, index) {
  if (!task || typeof task !== "object") return null;

  const name = String(task.name ?? task.nombre ?? "").trim();
  if (!name) return null;

  const priorityValue = String(task.priority ?? task.prioridad ?? "media").toLowerCase();
  const priority = ["alta", "media", "baja"].includes(priorityValue)
    ? priorityValue
    : "media";
  const completedAt = task.completedAt ?? task.fechaHecha ?? null;
  const createdAt = Number(task.createdAt ?? task.created ?? Date.now() + index);

  return {
    id: task.id ?? `migrated-${index}`,
    name,
    time: String(task.time ?? task.hora ?? ""),
    priority,
    done: Boolean(task.done),
    createdAt: Number.isFinite(createdAt) ? createdAt : Date.now() + index,
    completedAt: typeof completedAt === "string" ? completedAt : null
  };
}

export function normalizeData(value) {
  const defaults = createDefaultData();
  const source = value && typeof value === "object" ? value : {};
  const tasks = Array.isArray(source.tasks)
    ? source.tasks
    : Array.isArray(source.tareas)
      ? source.tareas
      : [];

  return {
    ...defaults,
    xp: Number.isFinite(Number(source.xp)) ? Math.max(0, Number(source.xp)) : 0,
    coins: Number.isFinite(Number(source.coins)) ? Math.max(0, Number(source.coins)) : 0,
    sessions: Number.isFinite(Number(source.sessions)) ? Math.max(0, Number(source.sessions)) : 0,
    completedDates: Array.isArray(source.completedDates)
      ? [...new Set(source.completedDates.filter(date => typeof date === "string"))]
      : [],
    unlocked: Array.isArray(source.unlocked)
      ? [...new Set(source.unlocked.filter(id => typeof id === "string"))]
      : Array.isArray(source.logros)
        ? [...new Set(source.logros.filter(id => typeof id === "string"))]
        : [],
    tasks: tasks.map(normalizeTask).filter(Boolean)
  };
}

function parseJSON(storage, key) {
  const raw = storage.getItem(key);
  return raw === null ? null : JSON.parse(raw);
}

function migrateSpanishData(storage) {
  const savedTasks = parseJSON(storage, "focusTareasPro");
  const legacyTasks = savedTasks === null
    ? parseJSON(storage, "focusTareas")
    : savedTasks;
  const savedProgress = parseJSON(storage, "focusDatosPro");

  if (legacyTasks === null && savedProgress === null) return null;

  const tasks = Array.isArray(legacyTasks)
    ? legacyTasks
    : Array.isArray(legacyTasks?.tareas)
      ? legacyTasks.tareas
      : [];
  const progress = savedProgress && typeof savedProgress === "object"
    ? savedProgress
    : {};

  return normalizeData({
    tasks,
    xp: progress.xp,
    sessions: progress.sesiones ?? progress.sessions,
    completedDates: progress.completadasHoy ?? progress.completedDates,
    unlocked: progress.logros ?? progress.unlocked
  });
}

export function loadData(storage = globalThis.localStorage) {
  const current = parseJSON(storage, STORAGE_KEY);
  if (current !== null) return { data: normalizeData(current), migratedFrom: null };

  const previousVersion = parseJSON(storage, "d10_focus_ultra_v1");
  if (previousVersion !== null) {
    return { data: normalizeData(previousVersion), migratedFrom: "d10_focus_ultra_v1" };
  }

  const legacy = migrateSpanishData(storage);
  if (legacy !== null) return { data: legacy, migratedFrom: "focusTareas" };

  return { data: createDefaultData(), migratedFrom: null };
}

export function saveData(data, storage = globalThis.localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify(normalizeData(data)));
}
