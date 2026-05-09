export async function getCapsules(req, res) {
  res.status(501).json({ message: "List capsules endpoint scaffolded." });
}

export async function createCapsule(req, res) {
  res.status(501).json({ message: "Create capsule endpoint scaffolded." });
}

export async function getCapsuleById(req, res) {
  res.status(501).json({ message: `View capsule ${req.params.id} endpoint scaffolded.` });
}

export async function deleteCapsule(req, res) {
  res.status(501).json({ message: `Delete capsule ${req.params.id} endpoint scaffolded.` });
}

export async function shareCapsule(req, res) {
  res.status(501).json({ message: `Share capsule ${req.params.id} endpoint scaffolded.` });
}
