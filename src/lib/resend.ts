// Utility file for Resend email service
// This prevents build failures when RESEND_API_KEY is not set

let resendInstance: any = null;
let isResendAvailable = false;

// Initialize Resend only if API key is available
if (process.env.RESEND_API_KEY) {
  try {
    const { Resend } = require('resend');
    resendInstance = new Resend(process.env.RESEND_API_KEY);
    isResendAvailable = true;
  } catch (error) {
    console.warn('Failed to initialize Resend:', error);
    isResendAvailable = false;
  }
} else {
  console.warn('RESEND_API_KEY is not set. Email functionality will be disabled.');
  isResendAvailable = false;
}

export const resend = resendInstance;
export const isResendConfigured = isResendAvailable;

// Helper function to check if email service is available
export const checkEmailService = () => {
  return isResendConfigured && resend !== null;
};