import { Resend } from 'resend';
import dotenv from 'dotenv';
import { passwordResetTemplate, verificationEmailTemplate, welcomeEmailTemplate } from './emailTemplates.js';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// verification email
const sendVerificationEmail = async (emailTo, verificationToken) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [emailTo],
            subject: 'Verify your email',
            html: verificationEmailTemplate(verificationToken),
        });

    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }
}

// welcome email
const sendWelcomeEmail = async (emailTo, username) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [emailTo],
            subject: 'Welcome to Acme',
            html: welcomeEmailTemplate(username),
        });
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }

}

// password reset
const sendPasswordResetEmail = async (name,emailTo, resetToken) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [emailTo],
            subject: 'Reset your password',
            html: passwordResetTemplate(name,resetToken),
        });
    }
    catch (error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }
}


export { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail }