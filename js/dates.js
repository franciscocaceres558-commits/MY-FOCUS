export function todayKey(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

export function getStreak(completedDates, today = new Date()) {
  const days = [...new Set(completedDates)]
    .filter(day => /^\d{4}-\d{2}-\d{2}$/.test(day))
    .sort()
    .reverse();

  if (!days.length) return 0;

  const todayString = todayKey(today);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = todayKey(yesterday);

  if (days[0] !== todayString && days[0] !== yesterdayString) return 0;

  let streak = 0;
  const expected = new Date(`${days[0]}T12:00:00`);

  for (const day of days) {
    if (day !== todayKey(expected)) break;
    streak++;
    expected.setDate(expected.getDate() - 1);
  }

  return streak;
}
