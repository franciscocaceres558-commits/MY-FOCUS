import { todayKey } from "./dates.js";
import { notifyDueTasks, requestNotificationPermission } from "./notifications.js";
import {
  completePendingTasks,
  addTask,
  clearCompletedTasks,
  deleteTask,
  toggleTask,
  updateTask
} from "./tasks.js";
import { unlockAchievements } from "./progression.js";
import { createDefaultData, loadData, saveData } from "./storage.js";
import { createPomodoroTimer } from "./timer.js";
import { renderSummary, renderTasks, renderTimer, showToast } from "./ui.js";

const $ = id => document.getElementById(id);
let data;
let editingId = null;
let focusMode = false;
let notificationsEnabled = false;
const notifiedTasks = new Set();
let lastNotificationCheck = "";

try {
  const loaded = loadData();
  data = loaded.data;
  if (loaded.migratedFrom) {
    showToast("Tus datos anteriores se importaron a esta versión.");
  }
} catch (error) {
  console.error("No se pudieron cargar los datos guardados.", error);
  data = createDefaultData();
  showToast("No se pudieron leer tus datos guardados. Se iniciará una lista nueva.");
}

function persist() {
  try {
    saveData(data);
  } catch (error) {
    console.error("No se pudieron guardar los datos.", error);
    showToast("No se pudieron guardar los cambios en este navegador.");
  }
}

function render() {
  renderSummary(data);
  renderTaskList();
  persist();
}

function renderTaskList() {
  renderTasks(data, {
    query: $("searchInput").value,
    filter: $("filterSelect").value
  }, {
    toggle: handleToggleTask,
    edit: handleEditTask,
    delete: handleDeleteTask
  });
}

function announceAchievements(unlocked) {
  if (!unlocked.length) return;
  const names = unlocked.map(achievement => achievement.name).join(", ");
  const rewards = unlocked.reduce((total, achievement) => ({
    xp: total.xp + achievement.reward,
    coins: total.coins + achievement.coins
  }), { xp: 0, coins: 0 });
  showToast(`🏆 Logro desbloqueado: ${names}. +${rewards.xp} XP y +${rewards.coins} monedas.`);
}

function handleToggleTask(id) {
  const result = toggleTask(data, id, todayKey());
  if (!result) return;

  if (result.completed) {
    showToast("✅ ¡Tarea completada! +100 XP y +5 monedas.");
    announceAchievements(unlockAchievements(data));
  } else {
    showToast("Tarea marcada como pendiente.");
  }
  render();
}

function handleEditTask(id) {
  const task = data.tasks.find(item => String(item.id) === String(id));
  if (!task) return;

  editingId = task.id;
  $("taskInput").value = task.name;
  $("taskTime").value = task.time;
  $("taskPriority").value = task.priority;
  $("submitTask").textContent = "Guardar cambios";
  $("taskInput").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleDeleteTask(id) {
  const task = data.tasks.find(item => String(item.id) === String(id));
  if (!task || !window.confirm(`¿Querés eliminar la tarea "${task.name}"?`)) return;
  deleteTask(data, id);
  if (String(editingId) === String(id)) resetForm();
  render();
  showToast("Tarea eliminada.");
}

function resetForm() {
  editingId = null;
  $("taskForm").reset();
  $("taskPriority").value = "media";
  $("submitTask").textContent = "＋ Agregar tarea";
}

$("taskForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("taskInput").value.trim();
  if (!name) {
    showToast("Escribí el nombre de tu tarea primero.");
    return;
  }

  const taskDetails = {
    name,
    time: $("taskTime").value,
    priority: $("taskPriority").value
  };

  if (editingId !== null) {
    updateTask(data, editingId, taskDetails);
    showToast("✏️ Tarea actualizada.");
  } else {
    addTask(data, taskDetails);
    showToast("✨ Tarea agregada. ¡A por ella!");
  }

  resetForm();
  render();
  checkTaskNotifications(new Date(), true);
});

$("createTaskBtn").addEventListener("click", () => {
  $("taskInput").focus();
  $("taskForm").scrollIntoView({ behavior: "smooth", block: "center" });
});

$("completeAll").addEventListener("click", () => {
  const pending = data.tasks.filter(task => !task.done).length;
  if (!pending) {
    showToast("¡No tenés tareas pendientes!");
    return;
  }
  if (!window.confirm("¿Marcar todas las tareas pendientes como completadas?")) return;

  completePendingTasks(data, todayKey());
  const unlocked = unlockAchievements(data);
  render();
  showToast("🎉 ¡Todas las tareas completadas!");
  announceAchievements(unlocked);
});

$("clearDone").addEventListener("click", () => {
  const count = data.tasks.filter(task => task.done).length;
  if (!count) {
    showToast("Todavía no hay tareas completadas para limpiar.");
    return;
  }
  if (!window.confirm(`¿Eliminar las ${count} tareas completadas?`)) return;
  clearCompletedTasks(data);
  render();
  showToast("Se limpiaron las tareas completadas.");
});

$("searchInput").addEventListener("input", renderTaskList);
$("filterSelect").addEventListener("change", renderTaskList);

$("notificationBtn").addEventListener("click", async () => {
  try {
    await requestNotificationPermission();
    notificationsEnabled = true;
    $("notificationBtn").textContent = "🔔 Avisos activados";
    $("notificationBtn").disabled = true;
    showToast("Los avisos de tareas están activados mientras esta página permanezca abierta.");
    checkTaskNotifications(new Date());
  } catch (error) {
    console.error("No se pudieron activar los avisos.", error);
    showToast(error.message || "No se pudieron activar los avisos.");
  }
});

function checkTaskNotifications(now, force = false) {
  const minuteKey = `${todayKey(now)} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  if (!notificationsEnabled || (!force && minuteKey === lastNotificationCheck)) return;
  lastNotificationCheck = minuteKey;

  notifyDueTasks(data.tasks, now, notifiedTasks, globalThis.Notification, error => {
    console.error("No se pudo mostrar un aviso de tarea.", error);
    showToast("No se pudo mostrar una notificación del navegador.");
  });
}

$("focusBtn").addEventListener("click", () => {
  focusMode = !focusMode;
  document.body.classList.toggle("focus-mode", focusMode);
  $("focusBtn").textContent = focusMode ? "✕ Salir del enfoque" : "◉ Modo enfoque";
  showToast(focusMode ? "◉ Modo enfoque activado." : "Modo enfoque desactivado.");
});

function updateClock() {
  const now = new Date();
  $("clock").textContent = now.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  $("dateText").textContent = now.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  checkTaskNotifications(now);
}

const timer = createPomodoroTimer(
  renderTimer,
  completedBreak => {
    if (!completedBreak) {
      data.sessions++;
      data.xp += 50;
      data.coins += 10;
      const unlocked = unlockAchievements(data);
      showToast("🍅 ¡Sesión terminada! +50 XP y +10 monedas. ¡Buen trabajo!");
      announceAchievements(unlocked);
      render();
    } else {
      showToast("☀️ Descanso terminado. ¡A seguir!");
    }
  }
);

$("timerStart").addEventListener("click", () => timer.start());
$("timerReset").addEventListener("click", () => {
  timer.reset();
  showToast("Temporizador reiniciado.");
});
$("timerSwitch").addEventListener("click", () => timer.switchMode());
window.addEventListener("pagehide", () => timer.destroy(), { once: true });

function initializeCanvas() {
  const canvas = $("particles");
  const context = canvas.getContext("2d");
  if (!context) {
    console.error("No se pudo inicializar el fondo animado.");
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];

  function resize() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    const count = Math.min(85, Math.floor(window.innerWidth / 12));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.5
    }));
  }

  function animate() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(157, 143, 255, 0.65)";
      context.fill();

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex++) {
        const next = particles[nextIndex];
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
        if (distance >= 105) continue;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(next.x, next.y);
        context.strokeStyle = `rgba(157, 143, 255, ${0.14 * (1 - distance / 105)})`;
        context.stroke();
      }
    });

    if (!reduceMotion) window.requestAnimationFrame(animate);
  }

  resize();
  if (reduceMotion) animate();
  else window.requestAnimationFrame(animate);
  window.addEventListener("resize", resize);
}

updateClock();
setInterval(updateClock, 1000);
initializeCanvas();
renderTimer(timer.getState());
render();
