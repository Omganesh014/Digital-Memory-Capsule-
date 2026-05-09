import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    login("placeholder-token", { email });
    navigate("/");
  }

  return (
    <section>
      <h1>Login</h1>
      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input type="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
