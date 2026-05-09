export default function Register() {
  return (
    <section>
      <h1>Create account</h1>
      <form className="form-card">
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Password
          <input name="password" type="password" required />
        </label>
        <button type="button">Register</button>
      </form>
    </section>
  );
}
