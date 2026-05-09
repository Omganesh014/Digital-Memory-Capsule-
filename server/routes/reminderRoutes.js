import { Router } from "express";
import { createReminder, getReminders } from "../controllers/reminderController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.use(requireAuth);

router.post("/", createReminder);
router.get("/", getReminders);

export default router;
