import { Router } from "express";
import {
  createCapsule,
  deleteCapsule,
  getCapsuleById,
  getCapsules,
  shareCapsule
} from "../controllers/capsuleController.js";
import { uploadMedia } from "../controllers/mediaController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", getCapsules);
router.post("/", createCapsule);
router.get("/:id", getCapsuleById);
router.delete("/:id", deleteCapsule);
router.post("/:id/share", shareCapsule);
router.post("/:id/media", upload.array("media", 5), uploadMedia);

export default router;
