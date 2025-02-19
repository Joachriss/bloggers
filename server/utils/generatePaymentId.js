import crypto from 'crypto';
export const generatePaymentId = () => crypto.randomUUID();
