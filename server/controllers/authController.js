export async function register(req, res) {
  res.status(501).json({ message: "Register endpoint scaffolded. Add bcrypt hashing and user insert." });
}

export async function login(req, res) {
  res.status(501).json({ message: "Login endpoint scaffolded. Add password check and JWT signing." });
}

export async function logout(req, res) {
  res.json({ message: "Logout on the client by deleting the JWT token." });
}
