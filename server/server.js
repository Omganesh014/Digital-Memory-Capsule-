import app from "./app.js";
import { startReminderJob } from "./cron/reminderJob.js";

const port = process.env.PORT || 5000;

startReminderJob();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
