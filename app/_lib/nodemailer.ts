import nodemailer from 'nodemailer';

// Create a transporter object using the Mailtrap SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST, // Mailtrap SMTP server
  port: parseInt(process.env.MAIL_PORT as string, 10), // Port for Mailtrap
  auth: {
    user: process.env.MAIL_USERNAME, 
    pass: process.env.MAIL_PASSWORD, 
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email address
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
