import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

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

    // TEMPORARILY DISABLED: Email functionality
    // TODO: Re-enable when Resend build issue is resolved
    console.log('Contact form submission:', { name, email, phone, message });

    return NextResponse.json({ 
      message: 'Contact form received successfully. Email service temporarily disabled for maintenance.' 
    }, { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
  }
}
