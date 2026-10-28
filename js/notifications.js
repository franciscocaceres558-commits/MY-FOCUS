import { todayKey } from "./dates.js";

export async function requestNotificationPermission(NotificationApi = globalThis.Notification) {
  if (!NotificationApi) {
    throw new Error("Este navegador no admite notificaciones.");
  }
  if (NotificationApi.permission === "granted") return true;
  if (NotificationApi.permission === "denied") {
    throw new Error("El permiso de notificaciones está bloqueado en el navegador.");
  }

  const permission = await NotificationApi.requestPermission();
  if (permission !== "granted") {
    throw new Error("No se concedió el permiso para mostrar notificaciones.");
  }
  return true;
}

export function notifyDueTasks(
  tasks,
  now,
  notified = new Set(),
  NotificationApi = globalThis.Notification,
  onError = error => { throw error; }
) {
  if (!NotificationApi || NotificationApi.permission !== "granted") return 0;

  const day = todayKey(now);
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  let sent = 0;

  tasks.forEach(task => {
    if (task.done || task.time !== time) return;
    const key = `${day}:${task.id}`;
    if (notified.has(key)) return;
    notified.add(key);

    try {
      new NotificationApi("¡Hora de tu tarea!", {
        body: task.name,
        tag: key
      });
      sent++;
    } catch (error) {
      onError(error);
    }
  });

  return sent;
}
