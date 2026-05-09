import useCountdown from "../hooks/useCountdown.js";

export default function CountdownTimer({ targetDate }) {
  const countdown = useCountdown(targetDate);

  if (countdown.isUnlocked) {
    return <p className="muted">Unlocked</p>;
  }

  return (
    <div className="countdown" aria-label="Time until unlock">
      <span>{countdown.days}d</span>
      <span>{countdown.hours}h</span>
      <span>{countdown.minutes}m</span>
      <span>{countdown.seconds}s</span>
    </div>
  );
}
