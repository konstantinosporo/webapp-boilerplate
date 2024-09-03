import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/_lib/nodemailer';

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();

    if (!to || !subject || !text) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await sendEmail(to, subject, text);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error.message || error);
    return NextResponse.json({
      message: 'Internal Server Error',
      error: error.message || 'An unknown error occurred',
    }, { status: 500 });
  }
}
