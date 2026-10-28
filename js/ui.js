import { todayKey, getStreak } from "./dates.js";
import {
  ACHIEVEMENTS,
  getLevel,
  getLevelProgress,
  getTitle,
  getTitleDescription
} from "./progression.js";
import { completedTasks } from "./tasks.js";

const $ = id => document.getElementById(id);

export function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 2800);
}

function renderAchievements(data) {
  const container = $("achievements");
  container.replaceChildren();

  ACHIEVEMENTS.forEach(achievement => {
    const unlocked = data.unlocked.includes(achievement.id);
    const item = document.createElement("div");
    item.className = `achievement${unlocked ? "" : " locked"}`;

    const icon = document.createElement("div");
    icon.className = "achievement-icon";
    icon.textContent = achievement.icon;

    const description = document.createElement("div");
    const name = document.createElement("h4");
    name.textContent = `${unlocked ? "✓ " : "🔒 "}${achievement.name}`;
    const detail = document.createElement("p");
    detail.textContent = achievement.description;
    description.append(name, detail);

    const reward = document.createElement("div");
    reward.className = "reward";
    reward.append(
      document.createTextNode(unlocked ? "OBTENIDO" : `+${achievement.reward} XP`),
      document.createElement("br"),
      document.createTextNode(`🪙 ${achievement.coins}`)
    );

    item.append(icon, description, reward);
    container.appendChild(item);
  });

  $("achievementCount").textContent = `${data.unlocked.length}/${ACHIEVEMENTS.length}`;
}

export function renderSummary(data) {
  const done = completedTasks(data).length;
  const total = data.tasks.length;
  const progress = getLevelProgress(data);
  const level = getLevel(data);
  const title = getTitle(level);
  const streak = getStreak(data.completedDates);
  const doneToday = data.tasks.filter(task =>
    task.done && task.completedAt === todayKey()
  ).length;
  const dailyGoal = Math.min(doneToday, 3);

  $("doneCount").textContent = done;
  $("pendingCount").textContent = total - done;
  $("streakCount").textContent = streak;
  $("taskCounter").textContent = `${total} ${total === 1 ? "tarea" : "tareas"}`;
  $("levelNumber").textContent = level;
  $("coins").textContent = data.coins;
  $("xpText").textContent = `${progress} / 500 XP`;
  $("xpTotal").textContent = `${data.xp} XP total`;
  $("xpBar").style.width = `${progress / 500 * 100}%`;
  $("playerTitle").textContent = title;
  $("titleDisplay").textContent = title;
  $("titleDescription").textContent = getTitleDescription(title);
  $("levelMessage").textContent = progress === 0 && data.xp > 0
    ? "¡Subiste de nivel! Seguí así."
    : `Te faltan ${500 - progress} XP para el próximo nivel.`;
  $("dailyBar").style.width = `${dailyGoal / 3 * 100}%`;
  $("dailyText").textContent = `${dailyGoal}/3`;
  $("dailyMessage").textContent = dailyGoal >= 3
    ? "🎉 ¡Misión diaria completada! Excelente trabajo."
    : `Completá ${3 - dailyGoal} tarea(s) más para cumplir tu misión.`;

  renderAchievements(data);
}

function createActionButton(className, label, title, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.title = title;
  button.setAttribute("aria-label", title);
  button.addEventListener("click", onClick);
  return button;
}

export function renderTasks(data, { query = "", filter = "todas" } = {}, actions) {
  const list = $("taskList");
  const search = query.trim().toLocaleLowerCase();
  const priorityOrder = { alta: 0, media: 1, baja: 2 };
  let tasks = data.tasks.filter(task => {
    if (search && !task.name.toLocaleLowerCase().includes(search)) return false;
    if (filter === "pendientes" && task.done) return false;
    if (filter === "hechas" && !task.done) return false;
    if (filter === "alta" && task.priority !== "alta") return false;
    return true;
  });

  tasks.sort((a, b) => {
    if (a.done !== b.done) return Number(a.done) - Number(b.done);
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    if (a.time && b.time) return a.time.localeCompare(b.time);
    if (a.time) return -1;
    if (b.time) return 1;
    return b.createdAt - a.createdAt;
  });

  list.replaceChildren();
  if (!tasks.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "✨ No hay tareas para mostrar. Agregá una nueva y empezá a avanzar.";
    list.appendChild(empty);
    return;
  }

  tasks.forEach(task => {
    const item = document.createElement("div");
    item.className = `task${task.done ? " done" : ""}`;

    const check = createActionButton(
      "check",
      task.done ? "✓" : "",
      task.done ? "Marcar pendiente" : "Completar tarea",
      () => actions.toggle(task.id)
    );
    const content = document.createElement("div");
    const name = document.createElement("div");
    name.className = "task-name";
    name.textContent = task.name;
    const meta = document.createElement("div");
    meta.className = "task-meta";
    const priority = document.createElement("span");
    priority.className = `priority priority-${task.priority}`;
    priority.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    meta.appendChild(priority);
    if (task.time) {
      const time = document.createElement("span");
      time.textContent = `🕒 ${task.time}`;
      meta.appendChild(time);
    }
    const status = document.createElement("span");
    status.textContent = task.done ? "✓ Completada" : "○ Pendiente";
    meta.appendChild(status);
    content.append(name, meta);

    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";
    taskActions.append(
      createActionButton("icon-btn edit-btn", "✎", "Editar tarea", () => actions.edit(task.id)),
      createActionButton("icon-btn delete-btn", "×", "Eliminar tarea", () => actions.delete(task.id))
    );
    item.append(check, content, taskActions);
    list.appendChild(item);
  });
}

export function renderTimer(state) {
  const minutes = Math.floor(state.secondsRemaining / 60);
  const seconds = state.secondsRemaining % 60;
  $("timerDisplay").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const completed = state.duration - state.secondsRemaining;
  $("timerCircle").style.setProperty(
    "--timer-angle",
    `${completed / state.duration * 360}deg`
  );
  $("timerMode").textContent = state.isBreak ? "MODO DESCANSO" : "SESIÓN DE ENFOQUE";
  $("timerMessage").textContent = state.isBreak
    ? "Respirá, estirá el cuerpo y descansá."
    : "25 minutos para vos y tus objetivos.";
  $("timerStart").textContent = state.isRunning
    ? "Ⅱ Pausar"
    : state.hasStarted ? "▶️ Continuar" : "▶️ Iniciar";
  $("timerSwitch").textContent = state.isBreak ? "🎯 Enfoque" : "☕ Descanso";
}
