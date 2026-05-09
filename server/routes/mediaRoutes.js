import { Router } from "express";
import { deleteMedia } from "../controllers/mediaController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.use(requireAuth);

router.delete("/:id", deleteMedia);

export default router;
