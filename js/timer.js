const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

export function createPomodoroTimer(
  onTick,
  onComplete,
  {
    focusSeconds = FOCUS_SECONDS,
    breakSeconds = BREAK_SECONDS,
    scheduleInterval = setInterval,
    cancelInterval = clearInterval
  } = {}
) {
  let isBreak = false;
  let secondsRemaining = focusSeconds;
  let intervalId = null;
  let hasStarted = false;

  function stop() {
    if (intervalId !== null) cancelInterval(intervalId);
    intervalId = null;
  }

  function getState() {
    return {
      isBreak,
      secondsRemaining,
      isRunning: intervalId !== null,
      hasStarted,
      duration: isBreak ? breakSeconds : focusSeconds
    };
  }

  function notify() {
    onTick(getState());
  }

  return {
    getState,
    start() {
      if (intervalId !== null) {
        stop();
        notify();
        return;
      }

      hasStarted = true;
      intervalId = scheduleInterval(() => {
        secondsRemaining--;
        if (secondsRemaining <= 0) {
          stop();
          const completedBreak = isBreak;
          isBreak = !isBreak;
          secondsRemaining = isBreak ? breakSeconds : focusSeconds;
          hasStarted = false;
          onComplete(completedBreak);
        }
        notify();
      }, 1000);
      notify();
    },
    reset() {
      stop();
      secondsRemaining = isBreak ? breakSeconds : focusSeconds;
      hasStarted = false;
      notify();
    },
    switchMode() {
      stop();
      isBreak = !isBreak;
      secondsRemaining = isBreak ? breakSeconds : focusSeconds;
      hasStarted = false;
      notify();
      return getState();
    },
    destroy() {
      stop();
    }
  };
}
