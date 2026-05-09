import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer.jsx";

export default function CapsuleCard({ capsule }) {
  const unlockDate = capsule.unlockDate || capsule.unlock_date;

  return (
    <article className="card">
      <p className="muted">{unlockDate ? "Unlocks on" : "No unlock date set"}</p>
      <h3>{capsule.title || "Untitled capsule"}</h3>
      {unlockDate && <CountdownTimer targetDate={unlockDate} />}
      <Link className="primary-link" to={`/capsules/${capsule.id}`}>
        View capsule
      </Link>
    </article>
  );
}
