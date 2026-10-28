import { getStreak } from "./dates.js";
import { completedTasks } from "./tasks.js";

export const ACHIEVEMENTS = [
  {
    id: "first",
    icon: "🌱",
    name: "Primer paso",
    description: "Completá tu primera tarea.",
    reward: 50,
    coins: 10,
    test: data => completedTasks(data).length >= 1
  },
  {
    id: "five",
    icon: "⚡",
    name: "Imparable",
    description: "Completá 5 tareas.",
    reward: 100,
    coins: 25,
    test: data => completedTasks(data).length >= 5
  },
  {
    id: "ten",
    icon: "💎",
    name: "Máquina de objetivos",
    description: "Completá 10 tareas.",
    reward: 200,
    coins: 50,
    test: data => completedTasks(data).length >= 10
  },
  {
    id: "level3",
    icon: "🚀",
    name: "Subiendo de nivel",
    description: "Alcanzá el nivel 3.",
    reward: 150,
    coins: 35,
    test: data => getLevel(data) >= 3
  },
  {
    id: "session",
    icon: "🍅",
    name: "Mente enfocada",
    description: "Terminá una sesión Pomodoro.",
    reward: 100,
    coins: 25,
    test: data => data.sessions >= 1
  },
  {
    id: "streak",
    icon: "🔥",
    name: "Constancia total",
    description: "Conseguí una racha de 3 días.",
    reward: 250,
    coins: 75,
    test: data => getStreak(data.completedDates) >= 3
  }
];

const TITLE_DESCRIPTIONS = {
  Principiante: "Todo gran progreso empieza con el primer paso.",
  "En entrenamiento": "Estás construyendo hábitos que te acercan a tus metas.",
  "En crecimiento": "Tu esfuerzo empieza a convertirse en resultados.",
  Imparable: "La constancia ya es parte de tu identidad.",
  Estratega: "Planificás, ejecutás y seguís creciendo.",
  "Maestro del enfoque": "Sabés proteger tu tiempo y avanzar con intención.",
  "Leyenda absoluta": "Tus hábitos hablan por vos. Seguí brillando."
};

export function getLevel(data) {
  return Math.floor(data.xp / 500) + 1;
}

export function getLevelProgress(data) {
  return data.xp % 500;
}

export function getTitle(level) {
  if (level >= 15) return "Leyenda absoluta";
  if (level >= 10) return "Maestro del enfoque";
  if (level >= 7) return "Estratega";
  if (level >= 5) return "Imparable";
  if (level >= 3) return "En crecimiento";
  if (level >= 2) return "En entrenamiento";
  return "Principiante";
}

export function getTitleDescription(title) {
  return TITLE_DESCRIPTIONS[title] ?? TITLE_DESCRIPTIONS.Principiante;
}

export function unlockAchievements(data) {
  const unlocked = [];
  for (const achievement of ACHIEVEMENTS) {
    if (data.unlocked.includes(achievement.id) || !achievement.test(data)) continue;
    data.unlocked.push(achievement.id);
    data.xp += achievement.reward;
    data.coins += achievement.coins;
    unlocked.push(achievement);
  }
  return unlocked;
}
