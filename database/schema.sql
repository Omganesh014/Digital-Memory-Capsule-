CREATE DATABASE IF NOT EXISTS memory_capsule;
USE memory_capsule;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS capsules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  message TEXT NULL,
  encryption_iv VARCHAR(64) NULL,
  encryption_auth_tag VARCHAR(64) NULL,
  unlock_date DATETIME NOT NULL,
  is_public BOOLEAN DEFAULT FALSE,
  is_encrypted BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_capsules_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_capsules_user_id (user_id),
  INDEX idx_capsules_unlock_date (unlock_date)
);

CREATE TABLE IF NOT EXISTS capsule_media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  capsule_id INT NOT NULL,
  file_path VARCHAR(300) NOT NULL,
  original_name VARCHAR(255) NULL,
  mime_type VARCHAR(120) NULL,
  file_size BIGINT NULL,
  file_type ENUM('image', 'video') NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_capsule_media_capsule FOREIGN KEY (capsule_id) REFERENCES capsules(id) ON DELETE CASCADE,
  INDEX idx_capsule_media_capsule_id (capsule_id)
);

CREATE TABLE IF NOT EXISTS capsule_recipients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  capsule_id INT NOT NULL,
  email VARCHAR(150) NOT NULL,
  share_token VARCHAR(100) NOT NULL UNIQUE,
  invited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_capsule_recipients_capsule FOREIGN KEY (capsule_id) REFERENCES capsules(id) ON DELETE CASCADE,
  INDEX idx_capsule_recipients_capsule_id (capsule_id),
  INDEX idx_capsule_recipients_email (email)
);

CREATE TABLE IF NOT EXISTS reminders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  capsule_id INT NOT NULL,
  recipient_email VARCHAR(150) NOT NULL,
  reminder_type ENUM('before_unlock', 'on_unlock') DEFAULT 'on_unlock',
  remind_at DATETIME NOT NULL,
  sent BOOLEAN DEFAULT FALSE,
  sent_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_reminders_capsule FOREIGN KEY (capsule_id) REFERENCES capsules(id) ON DELETE CASCADE,
  INDEX idx_reminders_due (sent, remind_at),
  INDEX idx_reminders_capsule_id (capsule_id)
);
