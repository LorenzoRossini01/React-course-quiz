import { useEffect, useState } from "react";

function QuizTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="timer">
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </div>
  );
}

export default QuizTimer;
