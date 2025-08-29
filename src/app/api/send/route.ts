import { resend, checkEmailService } from '@/lib/resend';

const adminEmail = process.env.ADMIN_EMAIL;

const createEmailHtml = (title: string, message: string, name: string | null) => `
  <html>
    <body>
      <h2>${title}</h2>
      <p>Hello ${name || ''},</p>
      <p>${message}</p>
      <br/>
      <p>Best regards,</p>
      <p>The DEVSIRCH HUB Team</p>
    </body>
  </html>
`;

export async function POST(req: Request) {
  // Check if Resend is configured
  if (!checkEmailService()) {
    return new Response(JSON.stringify({ 
      error: 'Email service is not configured. Please contact support.' 
    }), { status: 503 });
  }

  if (!adminEmail) {
    console.error('ADMIN_EMAIL environment variable is not set.');
    return new Response(JSON.stringify({ error: 'Server configuration error.' }), { status: 500 });
  }

  try {
    const { name, email, subject, message } = await req.json();

    const emailSubject = subject || `New message from ${name || 'a site visitor'}`;
    const confirmationSubject = `We've received your message`;

    // 1. Send notification email to the admin
    const sendAdminEmail = resend.emails.send({
      from: process.env.FROM_EMAIL || 'Sirch Solutions <onboarding@resend.dev>', // Use environment variable or fallback
      to: adminEmail,
      subject: emailSubject,
      html: `<p>You have a new submission from ${email}:</p><p>${message}</p>`,
    });

    // 2. Send confirmation email to the user
    const sendUserConfirmation = resend.emails.send({
      from: process.env.FROM_EMAIL || 'Sirch Solutions <onboarding@resend.dev>', // Use environment variable or fallback
      to: email,
      subject: confirmationSubject,
      html: createEmailHtml(
        `Thanks for reaching out!`,
        `Thank you for contacting us. We have received your message and will get back to you as soon as possible.`,
        name
      ),
    });

    const [adminResult, userResult] = await Promise.all([sendAdminEmail, sendUserConfirmation]);

    if (adminResult.error) {
      console.error('Error sending admin email:', adminResult.error);
      return new Response(JSON.stringify({ error: 'Failed to send notification.' }), { status: 500 });
    }
    if (userResult.error) {
      console.error('Error sending user confirmation:', userResult.error);
      return new Response(JSON.stringify({ error: 'Failed to send confirmation email.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), { status: 500 });
  }
}
