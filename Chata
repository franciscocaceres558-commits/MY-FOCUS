<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>D10 | FOCUS</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --bg: #070910;
  --panel: rgba(18, 21, 37, .82);
  --line: rgba(155, 157, 255, .15);
  --purple: #9b7bff;
  --blue: #59c9ff;
  --green: #62f5b0;
  --text: #f4f5ff;
  --muted: #9296b2;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, sans-serif;
  overflow-x: hidden;
}

#particles {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
}

.glow {
  position: fixed;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  filter: blur(110px);
  opacity: .17;
  z-index: -1;
  pointer-events: none;
  animation: floatGlow 12s ease-in-out infinite alternate;
}

.glow.one { background: #7545ff; top: -120px; left: -130px; }
.glow.two { background: #087cbd; right: -160px; top: 40%; animation-delay: -5s; }
.glow.three { background: #5b28a8; bottom: -220px; left: 25%; animation-delay: -3s; }

@keyframes floatGlow {
  from { transform: translate(0,0) scale(1); }
  to { transform: translate(45px,35px) scale(1.2); }
}

button, input, select { font: inherit; }
button { cursor: pointer; }

.app {
  width: min(1120px, 100%);
  margin: auto;
  padding: 25px 18px 60px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: linear-gradient(135deg, #a18aff, #4c78ff);
  color: white;
  font-weight: 900;
  font-size: 21px;
  box-shadow: 0 0 35px #775aff55;
}

.brand h1 {
  margin: 0;
  font-size: 21px;
  letter-spacing: 3px;
}

.brand p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 1.5px;
}

.header-right {
  text-align: right;
  color: var(--muted);
  font-size: 12px;
}

#clock {
  color: white;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 21px;
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 45px #00000018;
}

.hero {
  display: grid;
  grid-template-columns: 1.4fr .8fr;
  gap: 18px;
  margin-bottom: 18px;
}

.eyebrow {
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero h2 {
  margin: 12px 0 9px;
  font-size: clamp(26px, 5vw, 42px);
  line-height: 1.1;
  letter-spacing: -1.5px;
}

.gradient-text {
  background: linear-gradient(90deg, #a994ff, #67d5ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.muted { color: var(--muted); }
.small { font-size: 12px; line-height: 1.6; }

.level-card {
  background: linear-gradient(145deg, #242044aa, #102537aa);
  border: 1px solid #a18aff30;
  border-radius: 18px;
  padding: 18px;
}

.level-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.level-number {
  font-size: 30px;
  font-weight: 900;
  color: #c3b5ff;
}

.coin-pill, .tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 100px;
  background: #a18aff18;
  border: 1px solid #a18aff30;
  font-size: 11px;
  font-weight: 700;
}

.progress-track {
  height: 8px;
  margin: 14px 0 9px;
  border-radius: 30px;
  background: #ffffff12;
  overflow: hidden;
}

.progress-fill {
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #8d71ff, #5acbff);
  transition: width .4s;
  box-shadow: 0 0 16px #8d71ff77;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}

.stat {
  padding: 17px;
  background: #111421bd;
  border: 1px solid var(--line);
  border-radius: 17px;
}

.stat-icon { font-size: 20px; }
.stat-number { font-size: 25px; font-weight: 900; margin: 9px 0 4px; }
.stat-label { font-size: 11px; color: var(--muted); }

.main-grid {
  display: grid;
  grid-template-columns: 1.25fr .75fr;
  gap: 18px;
  align-items: start;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 18px;
}

.section-heading h3 {
  margin: 0;
  font-size: 17px;
}

.section-heading p {
  margin: 5px 0 0;
  font-size: 11px;
  color: var(--muted);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 125px;
  gap: 10px;
}

.field {
  width: 100%;
  border: 1px solid #ffffff16;
  border-radius: 12px;
  background: #090c15;
  color: white;
  padding: 13px 12px;
  outline: none;
  min-width: 0;
}

.field:focus { border-color: #9b7bff99; }
.field::placeholder { color: #6d718d; }

.form-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  color: white;
  background: #ffffff09;
  font-weight: 700;
  font-size: 12px;
  transition: .2s;
}

.btn:hover { transform: translateY(-1px); filter: brightness(1.2); }

.btn-primary {
  background: linear-gradient(110deg, #8b6bff, #527dff);
  border: 0;
  box-shadow: 0 7px 25px #7257ff2b;
}

.btn-green {
  background: #62f5b01a;
  color: var(--green);
  border-color: #62f5b033;
}

.btn-danger {
  color: #ff8f9b;
  border-color: #ff8f9b2b;
}

.search-row {
  display: grid;
  grid-template-columns: 1fr 125px;
  gap: 10px;
  margin: 18px 0 12px;
}

.task-list {
  display: grid;
  gap: 10px;
}

.task {
  display: grid;
  grid-template-columns: 25px 1fr auto;
  gap: 11px;
  align-items: center;
  padding: 13px;
  border-radius: 15px;
  background: #090c15a8;
  border: 1px solid #ffffff0e;
  transition: .2s;
}

.task:hover { border-color: #9b7bff44; }
.task.done { opacity: .58; }
.task.done .task-name { text-decoration: line-through; }

.check {
  width: 22px;
  height: 22px;
  border-radius: 7px;
  border: 1px solid #777b9d;
  background: transparent;
  color: #07120d;
  font-weight: 900;
  display: grid;
  place-items: center;
  padding: 0;
}

.task.done .check {
  background: var(--green);
  border-color: var(--green);
}

.task-name { font-size: 13px; font-weight: 700; overflow-wrap: anywhere; }
.task-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 7px; }
.task-meta span { font-size: 10px; color: var(--muted); }

.priority {
  border-radius: 30px;
  padding: 4px 7px;
  font-size: 9px !important;
  font-weight: 800;
}

.priority-alta { background: #ff63721c; color: #ff8995 !important; }
.priority-media { background: #ffc65a1b; color: #ffd37a !important; }
.priority-baja { background: #62f5b01a; color: #62f5b0 !important; }

.task-actions { display: flex; gap: 5px; }
.icon-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ffffff12;
  border-radius: 9px;
  color: #bfc3df;
  background: #ffffff08;
}

.empty {
  padding: 30px 12px;
  text-align: center;
  border: 1px dashed #ffffff20;
  border-radius: 15px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.side-stack { display: grid; gap: 18px; }

.timer {
  text-align: center;
  padding: 10px 0 4px;
}

.timer-circle {
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 10px auto 18px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at center, #101321 61%, transparent 62%),
    conic-gradient(#a18aff var(--timer-angle, 0deg), #ffffff12 0);
  box-shadow: 0 0 35px #8b6bff17;
}

#timerDisplay { font-size: 36px; font-weight: 900; letter-spacing: -1px; }
.timer-controls { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }

.achievements { display: grid; gap: 10px; }

.achievement {
  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid #ffffff10;
  background: #090c15a0;
  border-radius: 14px;
}

.achievement.locked { opacity: .5; filter: saturate(.4); }

.achievement-icon {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: #a18aff1a;
  font-size: 21px;
}

.achievement h4 { margin: 0 0 5px; font-size: 12px; }
.achievement p { margin: 0; color: var(--muted); font-size: 10px; line-height: 1.5; }
.reward { color: #ffd66b; font-size: 10px; font-weight: 800; white-space: nowrap; }

.reward-title {
  margin-top: 14px;
  border-radius: 14px;
  padding: 14px;
  background: linear-gradient(120deg, #a18aff13, #59c9ff0c);
  border: 1px solid var(--line);
}

.reward-title strong { color: #c8baff; }
.reward-title p { font-size: 11px; color: var(--muted); line-height: 1.6; margin: 7px 0 0; }

footer {
  text-align: center;
  margin-top: 25px;
  color: #666b87;
  font-size: 10px;
  letter-spacing: 1px;
}

.toast {
  position: fixed;
  bottom: 22px;
  left: 50%;
  transform: translate(-50%, 25px);
  background: #20243a;
  color: white;
  border: 1px solid #a18aff55;
  border-radius: 14px;
  padding: 13px 18px;
  font-size: 12px;
  box-shadow: 0 10px 40px #0008;
  opacity: 0;
  pointer-events: none;
  transition: .25s;
  z-index: 10;
  max-width: calc(100% - 30px);
  text-align: center;
}

.toast.show { opacity: 1; transform: translate(-50%, 0); }

.focus-mode .hide-focus { display: none !important; }
.focus-mode .main-grid { grid-template-columns: 1fr; }
.focus-mode .side-stack { grid-template-columns: 1fr 1fr; }

@media (max-width: 760px) {
  .app { padding: 18px 13px 40px; }
  .hero, .main-grid { grid-template-columns: 1fr; }
  .stats { grid-template-columns: repeat(2, 1fr); }
  .panel { padding: 16px; }
  .header-right { font-size: 10px; }
  .brand h1 { font-size: 18px; }
  .brand p { font-size: 9px; }
  .logo { width: 42px; height: 42px; }
  .focus-mode .side-stack { grid-template-columns: 1fr; }
}

@media (max-width: 380px) {
  .form-grid, .search-row { grid-template-columns: 1fr; }
  .task { grid-template-columns: 23px 1fr; }
  .task-actions { grid-column: 2; }
}
</style>
</head>

<body>
<canvas id="particles"></canvas>
<div class="glow one"></div>
<div class="glow two"></div>
<div class="glow three"></div>

<div class="app">
  <header>
    <div class="brand">
      <div class="logo">D10</div>
      <div>
        <h1>FOCUS</h1>
        <p>TU ESPACIO PRODUCTIVO</p>
      </div>
    </div>
    <div class="header-right">
      <div id="clock">00:00:00</div>
      <div id="dateText">Cargando fecha...</div>
    </div>
  </header>

  <section class="hero">
    <div class="panel">
      <div class="eyebrow">✦ Tu próxima versión empieza hoy</div>
      <h2>Menos excusas.<br><span class="gradient-text">Más resultados.</span></h2>
      <p class="muted small">Organizá tus tareas, ganá experiencia, desbloqueá premios y convertí tus objetivos en logros reales.</p>
      <button class="btn btn-primary" onclick="document.getElementById('taskInput').focus()">＋ Crear una tarea</button>
      <button class="btn" id="focusBtn" onclick="toggleFocus()">◉ Modo enfoque</button>
    </div>

    <div class="level-card">
      <div class="level-top">
        <div>
          <div class="eyebrow">Tu progreso</div>
          <div class="level-number">NIVEL <span id="levelNumber">1</span></div>
        </div>
        <div class="coin-pill">🪙 <span id="coins">0</span> monedas</div>
      </div>
      <div class="progress-track"><div class="progress-fill" id="xpBar"></div></div>
      <div class="level-top small muted">
        <span id="xpText">0 / 500 XP</span>
        <span id="xpTotal">0 XP total</span>
      </div>
      <p class="small" id="levelMessage">Cada tarea completada te acerca a tu siguiente nivel.</p>
      <div class="tag">🎖️ <span id="playerTitle">Principiante</span></div>
    </div>
  </section>

  <section class="stats">
    <div class="stat">
      <div class="stat-icon">✅</div>
      <div class="stat-number" id="doneCount">0</div>
      <div class="stat-label">Tareas completadas</div>
    </div>
    <div class="stat">
      <div class="stat-icon">📌</div>
      <div class="stat-number" id="pendingCount">0</div>
      <div class="stat-label">Pendientes</div>
    </div>
    <div class="stat">
      <div class="stat-icon">🔥</div>
      <div class="stat-number" id="streakCount">0</div>
      <div class="stat-label">Días de racha</div>
    </div>
    <div class="stat">
      <div class="stat-icon">🏆</div>
      <div class="stat-number" id="achievementCount">0/6</div>
      <div class="stat-label">Logros desbloqueados</div>
    </div>
  </section>

  <main class="main-grid">
    <section class="panel">
      <div class="section-heading">
        <div>
          <h3>📋 Mis tareas</h3>
          <p>Un paso a la vez. Vos podés.</p>
        </div>
        <span class="tag" id="taskCounter">0 tareas</span>
      </div>

      <form id="taskForm">
        <div class="form-grid">
          <input class="field" id="taskInput" placeholder="¿Qué querés lograr hoy?" maxlength="120" required>
          <input class="field" id="taskTime" type="time" aria-label="Hora de la tarea">
        </div>
        <div class="form-bottom">
          <select class="field" id="taskPriority" aria-label="Prioridad">
            <option value="media">Prioridad media</option>
            <option value="alta">🔴 Prioridad alta</option>
            <option value="baja">🟢 Prioridad baja</option>
          </select>
          <button class="btn btn-primary" id="submitTask" type="submit">＋ Agregar tarea</button>
        </div>
      </form>

      <div class="search-row">
        <input class="field" id="searchInput" placeholder="🔎 Buscar tarea...">
        <select class="field" id="filterSelect" aria-label="Filtrar tareas">
          <option value="todas">Todas</option>
          <option value="pendientes">Pendientes</option>
          <option value="hechas">Completadas</option>
          <option value="alta">Prioridad alta</option>
        </select>
      </div>

      <div class="task-list" id="taskList"></div>

      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:15px;">
        <button class="btn btn-green" id="completeAll">✓ Completar pendientes</button>
        <button class="btn btn-danger" id="clearDone">Limpiar completadas</button>
      </div>
      <p class="muted small">💡 Consejo: las tareas completadas te dan XP y pueden desbloquear premios.</p>
    </section>

    <div class="side-stack">
      <section class="panel">
        <div class="section-heading">
          <div>
            <h3>🍅 Zona de concentración</h3>
            <p>Un rato de enfoque, una pausa y seguís.</p>
          </div>
        </div>
        <div class="timer">
          <div class="tag" id="timerMode">SESIÓN DE ENFOQUE</div>
          <div class="timer-circle" id="timerCircle">
            <div id="timerDisplay">25:00</div>
          </div>
          <div class="timer-controls">
            <button class="btn btn-primary" id="timerStart">▶️ Iniciar</button>
            <button class="btn" id="timerReset">↻ Reiniciar</button>
            <button class="btn" id="timerSwitch">☕ Descanso</button>
          </div>
          <p class="muted small" id="timerMessage">25 minutos para vos y tus objetivos.</p>
        </div>
      </section>

      <section class="panel">
        <div class="section-heading">
          <div>
            <h3>🏆 Sala de logros</h3>
            <p>Desbloqueá medallas y ganá recompensas.</p>
          </div>
        </div>
        <div class="achievements" id="achievements"></div>
        <div class="reward-title">
          <div class="eyebrow">🎁 Tu título actual</div>
          <strong id="titleDisplay">Principiante</strong>
          <p id="titleDescription">Todo gran progreso empieza con el primer paso.</p>
        </div>
      </section>

      <section class="panel">
        <div class="section-heading">
          <div>
            <h3>🌟 Tu misión de hoy</h3>
            <p>El progreso se construye con constancia.</p>
          </div>
        </div>
        <div class="progress-track"><div class="progress-fill" id="dailyBar"></div></div>
        <div class="level-top small">
          <span class="muted">Objetivo: 3 tareas</span>
          <strong id="dailyText">0/3</strong>
        </div>
        <p class="small muted" id="dailyMessage">Completá 3 tareas para cumplir tu misión diaria.</p>
      </section>
    </div>
  </main>

  <footer>D10 · FOCUS SYSTEM — TU DISCIPLINA, TU PROGRESO, TUS REGLAS</footer>
</div>

<div class="toast" id="toast"></div>

<script>
const $ = id => document.getElementById(id);
const STORAGE_KEY = "d10_focus_complete_v1";

const todayKey = () => {
  const d = new Date();
  return d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");
};

const defaultData = {
  tasks: [],
  xp: 0,
  coins: 0,
  sessions: 0,
  completedDates: [],
  unlocked: [],
  title: "Principiante"
};

let data = loadData();
let editingId = null;
let timerSeconds = 25 * 60;
let timerRunning = false;
let timerInterval = null;
let isBreak = false;
let focusMode = false;
let toastTimeout;

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return { ...defaultData, ...saved, tasks: Array.isArray(saved.tasks) ? saved.tasks : [] };
    }
  } catch (e) {}
  return { ...defaultData, tasks: [] };
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    showToast("No se pudo guardar en este navegador.");
  }
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

const achievementList = [
  {
    id: "first",
    icon: "🌱",
    name: "Primer paso",
    description: "Completá tu primera tarea.",
    reward: 50,
    coins: 10,
    test: () => completedTasks().length >= 1
  },
  {
    id: "five",
    icon: "⚡",
    name: "Imparable",
    description: "Completá 5 tareas.",
    reward: 100,
    coins: 25,
    test: () => completedTasks().length >= 5
  },
  {
    id: "ten",
    icon: "💎",
    name: "Máquina de objetivos",
    description: "Completá 10 tareas.",
    reward: 200,
    coins: 50,
    test: () => completedTasks().length >= 10
  },
  {
    id: "level3",
    icon: "🚀",
    name: "Subiendo de nivel",
    description: "Alcanzá el nivel 3.",
    reward: 150,
    coins: 35,
    test: () => getLevel() >= 3
  },
  {
    id: "session",
    icon: "🍅",
    name: "Mente enfocada",
    description: "Terminá una sesión Pomodoro.",
    reward: 100,
    coins: 25,
    test: () => data.sessions >= 1
  },
  {
    id: "streak",
    icon: "🔥",
    name: "Constancia total",
    description: "Conseguí una racha de 3 días.",
    reward: 250,
    coins: 75,
    test: () => getStreak() >= 3
  }
];

function completedTasks() {
  return data.tasks.filter(task => task.done);
}

function getLevel() {
  return Math.floor(data.xp / 500) + 1;
}

function getLevelProgress() {
  return data.xp % 500;
}

function getStreak() {
  const days = [...new Set(data.completedDates || [])].sort().reverse();
  if (!days.length) return 0;

  const today = new Date();
  const keyFor = date => {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  };

  const todayString = keyFor(today);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = keyFor(yesterday);

  if (days[0] !== todayString && days[0] !== yesterdayString) return 0;

  let streak = 0;
  let expected = new Date(days[0] + "T12:00:00");

  for (const day of days) {
    if (day !== keyFor(expected)) break;
    streak++;
    expected.setDate(expected.getDate() - 1);
  }
  return streak;
}

function getTitle(level) {
  if (level >= 15) return "Leyenda absoluta";
  if (level >= 10) return "Maestro del enfoque";
  if (level >= 7) return "Estratega";
  if (level >= 5) return "Imparable";
  if (level >= 3) return "En crecimiento";
  if (level >= 2) return "En entrenamiento";
  return "Principiante";
}

function getTitleDescription(title) {
  const descriptions = {
    "Principiante": "Todo gran progreso empieza con el primer paso.",
    "En entrenamiento": "Estás construyendo hábitos que te acercan a tus metas.",
    "En crecimiento": "Tu esfuerzo empieza a convertirse en resultados.",
    "Imparable": "La constancia ya es parte de tu identidad.",
    "Estratega": "Planificás, ejecutás y seguís creciendo.",
    "Maestro del enfoque": "Sabés proteger tu tiempo y avanzar con intención.",
    "Leyenda absoluta": "Tus hábitos hablan por vos. Seguí brillando."
  };
  return descriptions[title] || descriptions["Principiante"];
}

function renderAchievements() {
  const container = $("achievements");
  container.innerHTML = "";

  achievementList.forEach(achievement => {
    const unlocked = data.unlocked.includes(achievement.id);
    const item = document.createElement("div");
    item.className = "achievement" + (unlocked ? "" : " locked");
    item.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div>
        <h4>${unlocked ? "✓ " : "🔒 "}${achievement.name}</h4>
        <p>${achievement.description}</p>
      </div>
      <div class="reward">${unlocked ? "OBTENIDO" : "+" + achievement.reward + " XP"}<br>🪙 ${achievement.coins}</div>
    `;
    container.appendChild(item);
  });

  $("achievementCount").textContent =
    data.unlocked.length + "/" + achievementList.length;
}

function checkAchievements() {
  let unlockedSomething = false;

  achievementList.forEach(achievement => {
    if (!data.unlocked.includes(achievement.id) && achievement.test()) {
      data.unlocked.push(achievement.id);
      data.xp += achievement.reward;
      data.coins += achievement.coins;
      unlockedSomething = true;
      showToast("🏆 ¡Logro desbloqueado: " + achievement.name +
        "! +" + achievement.reward + " XP y +" + achievement.coins + " monedas.");
    }
  });

  return unlockedSomething;
}

function updateSummary() {
  const done = completedTasks().length;
  const total = data.tasks.length;
  const pending = total - done;
  const level = getLevel();
  const progress = getLevelProgress();
  const title = getTitle(level);

  $("doneCount").textContent = done;
  $("pendingCount").textContent = pending;
  $("streakCount").textContent = getStreak();
  $("taskCounter").textContent = total + (total === 1 ? " tarea" : " tareas");

  $("levelNumber").textContent = level;
  $("coins").textContent = data.coins;
  $("xpText").textContent = progress + " / 500 XP";
  $("xpTotal").textContent = data.xp + " XP total";
  $("xpBar").style.width = (progress / 500 * 100) + "%";

  $("playerTitle").textContent = title;
  $("titleDisplay").textContent = title;
  $("titleDescription").textContent = getTitleDescription(title);

  $("levelMessage").textContent = progress === 0 && data.xp > 0
    ? "¡Subiste de nivel! Seguí así."
    : "Te faltan " + (500 - progress) + " XP para el próximo nivel.";

  const dailyGoal = Math.min(done, 3);
  $("dailyBar").style.width = (dailyGoal / 3 * 100) + "%";
  $("dailyText").textContent = dailyGoal + "/3";
  $("dailyMessage").textContent = dailyGoal >= 3
    ? "🎉 ¡Misión diaria completada! Excelente trabajo."
    : "Completá " + (3 - dailyGoal) + " tarea(s) más para cumplir tu misión.";

  renderAchievements();
}

function renderTasks() {
  const list = $("taskList");
  const query = $("searchInput").value.trim().toLowerCase();
  const filter = $("filterSelect").value;

  let tasks = [...data.tasks];

  if (query) {
    tasks = tasks.filter(task => task.name.toLowerCase().includes(query));
  }

  if (filter === "pendientes") tasks = tasks.filter(task => !task.done);
  if (filter === "hechas") tasks = tasks.filter(task => task.done);
  if (filter === "alta") tasks = tasks.filter(task => task.priority === "alta");

  tasks.sort((a, b) => {
    if (a.done !== b.done) return Number(a.done) - Number(b.done);
    const priority = { alta: 0, media: 1, baja: 2 };
    if (priority[a.priority] !== priority[b.priority]) {
      return priority[a.priority] - priority[b.priority];
    }
    if (a.time && b.time) return a.time.localeCompare(b.time);
    if (a.time) return -1;
    if (b.time) return 1;
    return b.createdAt - a.createdAt;
  });

  list.innerHTML = "";

  if (!tasks.length) {
    list.innerHTML = `<div class="empty">✨ No hay tareas para mostrar.<br>Agregá una nueva y empezá a avanzar.</div>`;
    return;
  }

  tasks.forEach(task => {
    const item = document.createElement("div");
    item.className = "task" + (task.done ? " done" : "");
    const priorityName = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    item.innerHTML = `
      <button class="check" title="${task.done ? "Marcar pendiente" : "Completar tarea"}" aria-label="Completar tarea">${task.done ? "✓" : ""}</button>
      <div>
        <div class="task-name">${escapeHTML(task.name)}</div>
        <div class="task-meta">
          <span class="priority priority-${task.priority}">${priorityName}</span>
          ${task.time ? `<span>🕒 ${escapeHTML(task.time)}</span>` : ""}
          <span>${task.done ? "✓ Completada" : "○ Pendiente"}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="icon-btn edit-btn" title="Editar" aria-label="Editar tarea">✎</button>
        <button class="icon-btn delete-btn" title="Eliminar" aria-label="Eliminar tarea">×</button>
      </div>
    `;

    item.querySelector(".check").addEventListener("click", () => toggleTask(task.id));
    item.querySelector(".edit-btn").addEventListener("click", () => editTask(task.id));
    item.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));
    list.appendChild(item);
  });
}

function render() {
  updateSummary();
  renderTasks();
  saveData();
}

$("taskForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("taskInput").value.trim();
  if (!name) {
    showToast("Escribí el nombre de tu tarea primero.");
    return;
  }

  const time = $("taskTime").value;
  const priority = $("taskPriority").value;

  if (editingId !== null) {
    const task = data.tasks.find(item => item.id === editingId);
    if (task) {
      task.name = name;
      task.time = time;
      task.priority = priority;
      showToast("✏️ Tarea actualizada.");
    }
    editingId = null;
    $("submitTask").textContent = "＋ Agregar tarea";
  } else {
    data.tasks.push({
      id: Date.now() + Math.floor(Math.random() * 1000),
      name,
      time,
      priority,
      done: false,
      createdAt: Date.now()
    });
    showToast("✨ Tarea agregada. ¡A por ella!");
  }

  $("taskInput").value = "";
  $("taskTime").value = "";
  $("taskPriority").value = "media";
  render();
});

function toggleTask(id) {
  const task = data.tasks.find(item => item.id === id);
  if (!task) return;

  if (!task.done) {
    task.done = true;
    task.completedAt = todayKey();
    data.xp += 100;
    data.coins += 5;

    if (!data.completedDates.includes(todayKey())) {
      data.completedDates.push(todayKey());
    }

    showToast("✅ ¡Tarea completada! +100 XP y +5 monedas.");
    checkAchievements();
  } else {
    task.done = false;
    task.completedAt = null;
    data.xp = Math.max(0, data.xp - 100);
    data.coins = Math.max(0, data.coins - 5);
    showToast("Tarea marcada como pendiente.");
  }

  render();
}

function editTask(id) {
  const task = data.tasks.find(item => item.id === id);
  if (!task) return;

  editingId = id;
  $("taskInput").value = task.name;
  $("taskTime").value = task.time || "";
  $("taskPriority").value = task.priority || "media";
  $("submitTask").textContent = "Guardar cambios";
  $("taskInput").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteTask(id) {
  const task = data.tasks.find(item => item.id === id);
  if (!task) return;
  if (!confirm('¿Querés eliminar la tarea "' + task.name + '"?')) return;

  data.tasks = data.tasks.filter(item => item.id !== id);
  if (editingId === id) {
    editingId = null;
    $("submitTask").textContent = "＋ Agregar tarea";
  }
  render();
  showToast("Tarea eliminada.");
}

$("completeAll").addEventListener("click", () => {
  const pending = data.tasks.filter(task => !task.done);
  if (!pending.length) {
    showToast("¡No tenés tareas pendientes!");
    return;
  }

  if (!confirm("¿Marcar todas las tareas pendientes como completadas?")) return;

  pending.forEach(task => {
    task.done = true;
    task.completedAt = todayKey();
    data.xp += 100;
    data.coins += 5;
  });

  if (!data.completedDates.includes(todayKey())) {
    data.completedDates.push(todayKey());
  }

  checkAchievements();
  render();
  showToast("🎉 ¡Todas las tareas completadas!");
});

$("clearDone").addEventListener("click", () => {
  const done = completedTasks().length;
  if (!done) {
    showToast("Todavía no hay tareas completadas para limpiar.");
    return;
  }

  if (!confirm("¿Eliminar las " + done + " tareas completadas?")) return;
  data.tasks = data.tasks.filter(task => !task.done);
  render();
  showToast("Se limpiaron las tareas completadas.");
});

$("searchInput").addEventListener("input", renderTasks);
$("filterSelect").addEventListener("change", renderTasks);

function toggleFocus() {
  focusMode = !focusMode;
  document.body.classList.toggle("focus-mode", focusMode);
  $("focusBtn").textContent = focusMode ? "✕ Salir del enfoque" : "◉ Modo enfoque";
  showToast(focusMode ? "◉ Modo enfoque activado." : "Modo enfoque desactivado.");
}

/* POMODORO */
function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  $("timerDisplay").textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  const total = isBreak ? 5 * 60 : 25 * 60;
  const completed = total - timerSeconds;
  $("timerCircle").style.setProperty("--timer-angle", (completed / total * 360) + "deg");
  $("timerMode").textContent = isBreak ? "MODO DESCANSO" : "SESIÓN DE ENFOQUE";
  $("timerMessage").textContent = isBreak
    ? "Respirá, estirá el cuerpo y descansá."
    : "25 minutos para vos y tus objetivos.";
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerRunning = false;
  $("timerStart").textContent = "▶️ Iniciar";
}

function startTimer() {
  if (timerRunning) {
    stopTimer();
    $("timerStart").textContent = "▶️ Continuar";
    return;
  }

  timerRunning = true;
  $("timerStart").textContent = "Ⅱ Pausar";

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 0) {
      stopTimer();

      if (!isBreak) {
        data.sessions++;
        data.xp += 50;
        data.coins += 10;
        checkAchievements();
        showToast("🍅 ¡Sesión terminada! +50 XP y +10 monedas. ¡Buen trabajo!");
      } else {
        showToast("☀️ Descanso terminado. ¡A seguir!");
      }

      isBreak = !isBreak;
      timerSeconds = isBreak ? 5 * 60 : 25 * 60;
      updateTimerDisplay();
      render();
    }
  }, 1000);
}

$("timerStart").addEventListener("click", startTimer);

$("timerReset").addEventListener("click", () => {
  stopTimer();
  timerSeconds = isBreak ? 5 * 60 : 25 * 60;
  updateTimerDisplay();
  showToast("Temporizador reiniciado.");
});

$("timerSwitch").addEventListener("click", () => {
  stopTimer();
  isBreak = !isBreak;
  timerSeconds = isBreak ? 5 * 60 : 25 * 60;
  updateTimerDisplay();
  $("timerSwitch").textContent = isBreak ? "🎯 Enfoque" : "☕ Descanso";
});

/* RELOJ Y FECHA */
function updateClock() {
  const now = new Date();
  $("clock").textContent = now.toLocaleTimeString("es-AR", {
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  $("dateText").textContent = now.toLocaleDateString("es-AR", {
    weekday: "long", day: "numeric", month: "long"
  });
}
updateClock();
setInterval(updateClock, 1000);

/* FONDO ANIMADO */
const canvas = $("particles");
const ctx = canvas.getContext("2d");
let particles = [];
let width = 0;
let height = 0;

function resizeCanvas() {
  width = canvas.width = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  height = canvas.height = window.innerHeight * Math.min(window.devicePixelRatio || 1, 2);
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  const scale = Math.min(window.devicePixelRatio || 1, 2);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);

  particles = [];
  const count = Math.min(85, Math.floor(window.innerWidth / 12));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.8 + .5
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
    if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(157, 143, 255, 0.65)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 105) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = "rgba(110, 143, 255, " + (1 - distance / 105) * .12 + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateParticles();

/* INICIO */
updateTimerDisplay();
checkAchievements();
render();
</script>
</body>
</html>
