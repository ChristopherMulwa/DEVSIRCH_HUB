export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // TEMPORARILY DISABLED: Email functionality
    // TODO: Re-enable when Resend build issue is resolved
    console.log('Send form submission:', { name, email, subject, message });

    return new Response(JSON.stringify({ 
      message: 'Form received successfully. Email service temporarily disabled for maintenance.' 
    }), { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), { status: 500 });
  }
}
