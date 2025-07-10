import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // More robust email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${"SIRCH SOLUTIONS KE"}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'New Early Access Signup for SIRCH Academy!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Early Access Lead</h2>
          <p>A new user has signed up for early access to the SIRCH Academy.</p>
          <hr>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr>
          <p style="font-size: 0.8em; color: #888;">This lead was captured from the 'Future Initiatives' page on the SIRCH SOLUTIONS KE website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Successfully signed up!' }, { status: 200 });
  } catch (error) {
    console.error('API Error (Early Access):', error);
    return NextResponse.json({ message: 'Server error. Please try again later.' }, { status: 500 });
  }
}
