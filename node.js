const crypto = require("crypto");
const fs = require("fs");

const password = "secretstuff";
const input = fs.readFileSync("ait-extras-1.1.0.194-1.20.1-beta.jar");
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(password, "mySalt123", 100000, 32, "sha256");

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
const encrypted = Buffer.concat([iv, cipher.update(input), cipher.final()]);
fs.writeFileSync("ait-extras-1.1.0.194-1.20.1-beta.jarr.enc", encrypted);