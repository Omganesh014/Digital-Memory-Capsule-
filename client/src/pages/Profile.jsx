import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="hero">
      <p className="muted">Profile</p>
      <h1>{user?.email || "Memory keeper"}</h1>
      <p>Profile editing and notification settings will be added here.</p>
    </section>
  );
}
