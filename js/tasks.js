import { todayKey } from "./dates.js";

export function completedTasks(data) {
  return data.tasks.filter(task => task.done);
}

export function addTask(data, { name, time, priority }, now = Date.now()) {
  const task = {
    id: `${now}-${Math.floor(Math.random() * 1000)}`,
    name: name.trim(),
    time,
    priority,
    done: false,
    createdAt: now,
    completedAt: null
  };
  data.tasks.push(task);
  return task;
}

export function updateTask(data, id, updates) {
  const task = data.tasks.find(item => String(item.id) === String(id));
  if (!task) return false;

  task.name = updates.name.trim();
  task.time = updates.time;
  task.priority = updates.priority;
  return true;
}

function completeTask(data, task, date) {
  task.done = true;
  task.completedAt = date;
  data.xp += 100;
  data.coins += 5;
}

export function toggleTask(data, id, date = todayKey()) {
  const task = data.tasks.find(item => String(item.id) === String(id));
  if (!task) return null;

  if (task.done) {
    task.done = false;
    task.completedAt = null;
    data.xp = Math.max(0, data.xp - 100);
    data.coins = Math.max(0, data.coins - 5);
    return { completed: false, task };
  }

  completeTask(data, task, date);
  if (!data.completedDates.includes(date)) data.completedDates.push(date);
  return { completed: true, task };
}

export function completePendingTasks(data, date = todayKey()) {
  const pending = data.tasks.filter(task => !task.done);
  pending.forEach(task => completeTask(data, task, date));
  if (pending.length && !data.completedDates.includes(date)) {
    data.completedDates.push(date);
  }
  return pending.length;
}

export function deleteTask(data, id) {
  const index = data.tasks.findIndex(task => String(task.id) === String(id));
  if (index < 0) return false;
  data.tasks.splice(index, 1);
  return true;
}

export function clearCompletedTasks(data) {
  const before = data.tasks.length;
  data.tasks = data.tasks.filter(task => !task.done);
  return before - data.tasks.length;
}
