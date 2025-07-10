import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // More robust email validation
    const emailRegex = /^[^
@]+@[^
@]+\.[^
@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail as an example
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Send from your email address
      replyTo: email, // Set the user's email as the reply-to
      to: process.env.EMAIL_RECIPIENT, // Your actual receiving email address
      subject: `New Inquiry from ${name} via Website`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Website Inquiry</h2>
          <p>You have received a new message from your website's contact form.</p>
          <hr>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; margin: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <hr>
          <p style="font-size: 0.8em; color: #888;">This email was sent from the SIRCH SOLUTIONS KE website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    // In production, you might want to log this error to a service
    return NextResponse.json({ message: 'Server error. Please try again later.' }, { status: 500 });
  }
}