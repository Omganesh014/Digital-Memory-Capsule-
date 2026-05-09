import crypto from "node:crypto";

const algorithm = "aes-256-gcm";

function getKey() {
  const key = process.env.ENCRYPTION_KEY;

  if (!key || Buffer.byteLength(key) !== 32) {
    throw new Error("ENCRYPTION_KEY must be exactly 32 bytes long");
  }

  return Buffer.from(key);
}

export function encryptText(plainText) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(algorithm, getKey(), iv);
  const encrypted = Buffer.concat([cipher.update(plainText, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    encryptedText: encrypted.toString("hex"),
    iv: iv.toString("hex"),
    authTag: authTag.toString("hex")
  };
}

export function decryptText(encryptedText, iv, authTag) {
  const decipher = crypto.createDecipheriv(algorithm, getKey(), Buffer.from(iv, "hex"));
  decipher.setAuthTag(Buffer.from(authTag, "hex"));

  return Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "hex")),
    decipher.final()
  ]).toString("utf8");
}
