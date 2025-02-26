import crypto from crypto;

export const generateVerificationToken = () => Math.floor(100000 + Math.random() * 900000);
export const generatePasswordResetToken = () => crypto.randomBytes(20).toString('hex');