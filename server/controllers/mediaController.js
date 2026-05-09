export async function uploadMedia(req, res) {
  res.status(201).json({
    message: "Media upload endpoint scaffolded.",
    files: req.files || []
  });
}

export async function deleteMedia(req, res) {
  res.status(501).json({ message: `Delete media ${req.params.id} endpoint scaffolded.` });
}
