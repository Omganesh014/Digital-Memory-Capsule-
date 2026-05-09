import { useEffect, useState } from "react";

function getRemainingTime(targetDate) {
  const remaining = new Date(targetDate).getTime() - Date.now();

  if (!targetDate || Number.isNaN(remaining) || remaining <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isUnlocked: true };
  }

  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
    isUnlocked: false
  };
}

export default function useCountdown(targetDate) {
  const [countdown, setCountdown] = useState(() => getRemainingTime(targetDate));

  useEffect(() => {
    setCountdown(getRemainingTime(targetDate));

    const intervalId = window.setInterval(() => {
      setCountdown(getRemainingTime(targetDate));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return countdown;
}
