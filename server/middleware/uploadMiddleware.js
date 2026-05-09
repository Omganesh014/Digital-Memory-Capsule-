import multer from "multer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../uploads"),
  filename(req, file, callback) {
    const safeOriginalName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
    callback(null, `${Date.now()}-${safeOriginalName}`);
  }
});

function fileFilter(req, file, callback) {
  if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
    return callback(null, true);
  }

  return callback(new Error("Only image and video uploads are allowed"));
}

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024
  }
});
