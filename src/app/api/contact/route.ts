import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Zod schema for validating the request body
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body against the schema
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(parsed.error.format(), { status: 400 });
    }

    const { name, email, phone, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: 'your-email@example.com', // Change this to your actual email address
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
