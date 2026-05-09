export function requireUnlocked(req, res, next) {
  const unlockDate = req.capsule?.unlock_date || req.capsule?.unlockDate;

  if (!unlockDate) {
    return next();
  }

  if (new Date(unlockDate).getTime() > Date.now()) {
    return res.status(423).json({ message: "Capsule is locked until its unlock date" });
  }

  return next();
}
