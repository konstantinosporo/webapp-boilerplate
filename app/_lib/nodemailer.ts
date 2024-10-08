import nodemailer from 'nodemailer';

// Create a transporter object using the Outlook SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST, // Outlook SMTP server
  port: parseInt(process.env.MAIL_PORT as string, 10), // Port for Outlook
  auth: {
    user: process.env.MAIL_USERNAME, 
    pass: process.env.MAIL_PASSWORD, 
  },
  secure: false, // true for 465, false for other ports
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_USERNAME, // Change this to your authenticated email
      to,
      subject,
      text,
    });

    console.log('Email sent:', info.response);
  } catch (error: any) {
    console.error('Error sending email:', error.message || error);
    throw new Error(error.message || 'Failed to send email');
  }
}
