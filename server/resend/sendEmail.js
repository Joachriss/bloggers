import { Resend } from 'resend';
import dotenv from 'dotenv';
import { passwordResetTemplate, verificationEmailTemplate, welcomeEmailTemplate,subscribedEmailTemplate, unsubscribedEmailTemplate } from './emailTemplates.js';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);


// FUNCTION TO SEND AN EMAIL
const sendEmail = async (email, subject, message) => {
    const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: [email],
        subject: subject,
        html: message,
    });
}

// verification email
const sendVerificationEmail = async (emailTo, verificationToken) => {
    try {
        sendEmail(emailTo, 'Verify your email', verificationEmailTemplate(verificationToken));
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }
}

// welcome email
const sendWelcomeEmail = async (emailTo, username) => {
    try {
        sendEmail(emailTo, 'Welcome to our platform', welcomeEmailTemplate(username));
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }

}

// password reset
const sendPasswordResetEmail = async (name, emailTo, resetToken) => {
    try {
        sendEmail(emailTo, 'Reset your password', passwordResetTemplate(name, resetToken));
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }
}

//  subscribed
const sendSubscribedEmail = async (name, emailTo) => {
    try {
        sendEmail(emailTo, 'You have subscribed', subscribedEmailTemplate(name));
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }

}

//  unsubscribed
const sendUnsubscribedEmail = async (name, emailTo) => {
    try {
        sendEmail(emailTo, 'You have unsubscribed', unsubscribedEmailTemplate(name));
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }

}

export { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendSubscribedEmail,sendUnsubscribedEmail }