import { Resend } from 'resend';
import dotenv from 'dotenv';
import { verificationEmailTemplate, welcomeEmailTemplate } from './emailTemplates.js';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// verification email
const verificationEmail = async (emailTo, verificationToken) => {
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
const welcomeEmail = async(emailTo, username) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [emailTo],
            subject: 'Welcome to Acme',
            html: welcomeEmailTemplate(username),
        });
    }
    catch(error) {
        console.log({ error: 'Error sending email', error });
        throw error;
    }

}

export { verificationEmail, welcomeEmail }