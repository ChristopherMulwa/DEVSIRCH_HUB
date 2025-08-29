import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

// Check if API key is available
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.warn('RESEND_API_KEY is not set. Contact form will not work in production.');
}

const resend = apiKey ? new Resend(apiKey) : null;

// Zod schema for validating the request body
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    // Check if Resend is properly configured
    if (!resend) {
      return NextResponse.json({ 
        message: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' 
      }, { status: 503 });
    }

    const body = await req.json();

    // Validate the request body against the schema
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(parsed.error.format(), { status: 400 });
    }

    const { name, email, phone, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'your-email@example.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
  }
}
