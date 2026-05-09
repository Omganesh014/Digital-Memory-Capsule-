import CapsuleCard from "../components/CapsuleCard.jsx";

const sampleCapsules = [
  {
    id: 1,
    title: "First memory capsule",
    unlockDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString()
  }
];

export default function Dashboard() {
  return (
    <section>
      <div className="hero">
        <p className="muted">Dashboard</p>
        <h1>Your future memories</h1>
        <p>Create capsules, track unlock dates, and share memories when the time is right.</p>
      </div>

      <div className="grid" style={{ marginTop: "1.5rem" }}>
        {sampleCapsules.map((capsule) => (
          <CapsuleCard key={capsule.id} capsule={capsule} />
        ))}
      </div>
    </section>
  );
}
