# Contact Form Setup Guide

## Prerequisites

1. **Resend Account**: Sign up at [https://resend.com](https://resend.com)
2. **Domain Verification**: Verify your domain on Resend (or use the default `onboarding@resend.dev` for testing)

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Resend API Key - Get this from https://resend.com/api-keys
RESEND_API_KEY=re_your_actual_api_key_here

# Contact form email configuration
CONTACT_EMAIL=your-actual-email@example.com
FROM_EMAIL=onboarding@resend.dev
```

## Getting Your Resend API Key

1. Go to [https://resend.com](https://resend.com) and sign up/login
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the key (starts with `re_`)
5. Paste it in your `.env.local` file

## Email Configuration

- **FROM_EMAIL**: The email address that will appear as the sender
  - For testing: Use `onboarding@resend.dev`
  - For production: Use a verified domain (e.g., `noreply@yourdomain.com`)
- **CONTACT_EMAIL**: Where contact form submissions will be sent

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Submit a test message
4. Check your email for the submission

## Production Deployment

Make sure to set the environment variables in your production environment:
- Vercel: Add them in the Environment Variables section
- Netlify: Add them in the Environment Variables section
- Other platforms: Follow their specific environment variable configuration

## Troubleshooting

- **"Email service is not configured"**: Check that `RESEND_API_KEY` is set
- **"Invalid API key"**: Verify your API key is correct
- **"Domain not verified"**: Make sure your FROM_EMAIL domain is verified on Resend
