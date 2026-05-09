import cron from "node-cron";

export function startReminderJob() {
  cron.schedule("*/5 * * * *", async () => {
    // Query unsent reminders here, send emails, then mark them as sent.
    console.log("Reminder job tick");
  });
}
