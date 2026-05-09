import { useParams } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer.jsx";

export default function ViewCapsule() {
  const { id } = useParams();
  const unlockDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString();

  return (
    <section className="hero">
      <p className="muted">Capsule #{id}</p>
      <h1>This capsule is locked</h1>
      <p>The backend will decide whether content can be shown based on the unlock date.</p>
      <CountdownTimer targetDate={unlockDate} />
    </section>
  );
}
