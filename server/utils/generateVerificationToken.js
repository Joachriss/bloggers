export const generateVerificationToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// export const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000);
console.log(generateVerificationToken);
generateVerificationToken;