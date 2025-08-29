"use client";

import { useState, useCallback, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Toaster, toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, Send, Shield, Clock, Users } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

// Dynamically import the Map component to prevent SSR issues
const Map = dynamic(
  () => import('@/components/ContactMap'),
  { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-300 animate-pulse" aria-label="Loading map..." /> 
  }
);

// Optimized Zod schema for form validation - reduced to 3-4 fields
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  phone: z.string().optional(),
  honeypot: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy."
  }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPhoneField, setShowPhoneField] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch,
    trigger,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  // Watch all fields for progress calculation
  const watchedFields = watch();
  
  // Calculate form progress - memoized for performance
  const progress = useMemo(() => {
    const requiredFields = ['name', 'email', 'message', 'consent'];
    const completedFields = requiredFields.filter(field => 
      watchedFields[field as keyof ContactFormInputs] && 
      !errors[field as keyof ContactFormInputs]
    ).length;
    
    return (completedFields / requiredFields.length) * 100;
  }, [watchedFields, errors]);

  // Update progress when calculated
  React.useEffect(() => {
    setFormProgress(progress);
  }, [progress]);

  // Watch email field for progressive disclosure
  const emailValue = watch('email');
  
  // Show phone field after email validation
  React.useEffect(() => {
    if (emailValue && emailValue.includes('@') && !showPhoneField) {
      setShowPhoneField(true);
    }
  }, [emailValue, showPhoneField]);

  // Real-time validation on blur - memoized for performance
  const handleFieldBlur = useCallback(async (fieldName: keyof ContactFormInputs) => {
    await trigger(fieldName);
  }, [trigger]);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    if (data.honeypot) {
        console.log("Bot submission detected");
        return;
    }
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast.success('Message sent successfully! We&apos;ll get back to you within 24 hours.', { id: toastId });
      reset();
      setShowPhoneField(false);
      setFormProgress(0);
    } catch {
      toast.error('Failed to send message. Please try again or contact us directly.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <Toaster 
        position="top-right"
        containerStyle={{
          top: 64,
          right: 16,
        }}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#ffffff',
            color: '#1f2937',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#ffffff',
            },
          },
        }}
      />

      {/* New Clean Header - No Hero Image */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16 lg:py-24" role="banner" aria-labelledby="contact-header">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="contact-header" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Ready to discuss your project? Let&apos;s talk about how we can help bring your vision to life.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-600 px-4" role="list" aria-label="Trust signals">
              <div className="flex items-center gap-2" role="listitem">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium">24hr response</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium">Free consultation</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium">Expert team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Form Above Fold */}
      <main className="py-12 md:py-16 lg:py-24 bg-white" role="main" aria-labelledby="contact-form-header">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Left Column: Optimized Form */}
              <motion.div variants={itemVariants} className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
                  <div className="mb-6 sm:mb-8">
                    <h2 id="contact-form-header" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Let&apos;s Connect
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                      Have a project in mind or just want to say hello? Fill out the form and we&apos;ll get back to you within 24 hours.
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="mt-4 sm:mt-6" role="progressbar" aria-valuenow={formProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Form completion progress">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Form Progress</span>
                        <span className="text-xs sm:text-sm font-medium text-blue-600">{Math.round(formProgress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${formProgress}%` }}
                        />
                      </div>
                      <AnimatePresence>
                        {formProgress === 100 && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-green-600 text-xs sm:text-sm font-medium mt-2 flex items-center gap-2"
                            role="status"
                            aria-live="polite"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            All required fields completed! You can now submit the form.
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 sm:space-y-6">
                    {/* Honeypot field */}
                    <input type="text" id="honeypot" style={{ display: 'none' }} {...register('honeypot')} />

                    {/* Name Field */}
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        onBlur={() => handleFieldBlur('name')}
                        className={`peer w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 rounded-xl text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-sm sm:text-base ${errors.name ? 'focus:ring-red-500 border-red-200 bg-red-50' : touchedFields.name && !errors.name ? 'border-green-200 bg-green-50' : 'border border-gray-200'}`}
                        placeholder="Full Name"
                        aria-label="Full Name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                        required
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-3 sm:left-4 -top-2 sm:-top-2.5 text-xs sm:text-sm font-medium transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-focus:-top-2 sm:peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-xs sm:peer-focus:text-sm bg-white px-1 sm:px-2 ${errors.name ? 'text-red-600' : touchedFields.name && !errors.name ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        Full Name *
                      </label>
                      {errors.name && (
                        <motion.p 
                          id="name-error"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-2"
                          role="alert"
                          aria-live="polite"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.name.message}
                        </motion.p>
                      )}
                      {touchedFields.name && !errors.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute right-3 sm:right-4 top-3 sm:top-4 text-green-500"
                          aria-label="Name field is valid"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        onBlur={() => handleFieldBlur('email')}
                        className={`peer w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 rounded-xl text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-sm sm:text-base ${errors.email ? 'focus:ring-red-500 border-red-200 bg-red-50' : touchedFields.email && !errors.email ? 'border-green-200 bg-green-50' : 'border border-gray-200'}`}
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        required
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-3 sm:left-4 -top-2 sm:-top-2.5 text-xs sm:text-sm font-medium transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-focus:-top-2 sm:peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-xs sm:peer-focus:text-sm bg-white px-1 sm:px-2 ${errors.email ? 'text-red-600' : touchedFields.email && !errors.email ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        Email Address *
                      </label>
                      {errors.email && (
                        <motion.p 
                          id="email-error"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-2"
                          role="alert"
                          aria-live="polite"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email.message}
                        </motion.p>
                      )}
                      {touchedFields.email && !errors.email && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute right-3 sm:right-4 top-3 sm:top-4 text-green-500"
                          aria-label="Email field is valid"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Phone Field - Progressive Disclosure */}
                    <AnimatePresence>
                      {showPhoneField && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            onBlur={() => handleFieldBlur('phone')}
                            className="peer w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 rounded-xl text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 border border-gray-200 text-sm sm:text-base"
                            placeholder="Phone Number (Optional)"
                            aria-label="Phone Number (Optional)"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-3 sm:left-4 -top-2 sm:-top-2.5 text-gray-500 text-xs sm:text-sm font-medium transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-focus:-top-2 sm:peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-xs sm:peer-focus:text-sm bg-white px-1 sm:px-2"
                          >
                            Phone Number (Optional)
                          </label>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        id="message"
                        {...register('message')}
                        onBlur={() => handleFieldBlur('message')}
                        rows={5}
                        className={`peer w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 rounded-xl text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 resize-none text-sm sm:text-base ${errors.message ? 'focus:ring-red-500 border-red-200 bg-red-50' : touchedFields.message && !errors.message ? 'border-green-200 bg-green-50' : 'border border-gray-200'}`}
                        placeholder="Your Message"
                        aria-label="Your Message"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-invalid={!!errors.message}
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-3 sm:left-4 -top-2 sm:-top-2.5 text-xs sm:text-sm font-medium transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-focus:-top-2 sm:peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-xs sm:peer-focus:text-sm bg-white px-1 sm:px-2 ${errors.message ? 'text-red-600' : touchedFields.message && !errors.message ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        Your Message *
                      </label>
                      {errors.message && (
                        <motion.p 
                          id="message-error"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-2"
                          role="alert"
                          aria-live="polite"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.message.message}
                        </motion.p>
                      )}
                      {touchedFields.message && !errors.message && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute right-3 sm:right-4 top-3 sm:top-4 text-green-500"
                          aria-label="Message field is valid"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Consent and Submit */}
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3">
                        <input
                          id="consent"
                          type="checkbox"
                          {...register('consent')}
                          onBlur={() => handleFieldBlur('consent')}
                          className={`h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 transition-colors ${errors.consent ? 'border-red-300' : touchedFields.consent && !errors.consent ? 'border-green-300' : ''}`}
                          aria-label="I agree to the Privacy Policy and consent to being contacted"
                          aria-describedby={errors.consent ? 'consent-error' : undefined}
                          aria-invalid={!!errors.consent}
                          required
                        />
                        <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link> and consent to being contacted about my inquiry.
                        </label>
                      </div>
                      {errors.consent && (
                        <motion.p 
                          id="consent-error"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs sm:text-sm flex items-center gap-2"
                          role="alert"
                          aria-live="polite"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.consent.message}
                        </motion.p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className={`w-full font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center text-base sm:text-lg ${
                          isSubmitting 
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                            : !isValid 
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                              : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600 hover:shadow-lg'
                        }`}
                        whileHover={isValid && !isSubmitting ? { scale: 1.02, y: -2 } : {}}
                        whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
                        aria-label="Send message"
                        aria-describedby={!isValid ? 'submit-status' : undefined}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 animate-spin" aria-hidden="true" />
                            Sending Message...
                          </>
                        ) : !isValid ? (
                          <>
                            <svg className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Complete Required Fields
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                      
                      {/* Form Completion Status */}
                      <AnimatePresence>
                        {formProgress === 100 && !isSubmitting && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl"
                            role="status"
                            aria-live="polite"
                            id="submit-status"
                          >
                            <div className="flex items-center justify-center gap-2 text-green-700">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-sm sm:text-base">Form Complete!</span>
                            </div>
                            <p className="text-green-600 text-xs sm:text-sm mt-1">All required fields are filled correctly.</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Right Column: Contact Info & Map */}
              <motion.div variants={itemVariants} className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 h-full">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
                    <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8">
                      We&apos;re here to help bring your digital vision to life. Reach out through any of these channels.
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <motion.a 
                      href="mailto:devsirchhub@gmail.com"
                      className="flex items-center group p-3 sm:p-4 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-blue-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 group-hover:bg-blue-400 transition-colors">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Email Us</p>
                        <span className="text-blue-100 group-hover:text-white transition-colors text-xs sm:text-sm">
                          devsirchhub@gmail.com
                        </span>
                      </div>
                    </motion.a>

                    <motion.a 
                      href="tel:+254759773145"
                      className="flex items-center group p-3 sm:p-4 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-blue-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 group-hover:bg-blue-400 transition-colors">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Call Us</p>
                        <span className="text-blue-100 group-hover:text-white transition-colors text-xs sm:text-sm">
                          +254 759 773 145
                        </span>
                      </div>
                    </motion.a>

                    <motion.div 
                      className="flex items-start group p-3 sm:p-4 rounded-xl bg-blue-500/20"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-blue-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Visit Us</p>
                        <span className="text-blue-100 text-xs sm:text-sm">Nairobi, Kenya</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced Map Section */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-semibold">Our Location</h3>
                      <motion.button
                        className="text-blue-200 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Larger
                      </motion.button>
                    </div>
                    <div className="h-48 sm:h-64 w-full rounded-xl overflow-hidden shadow-lg border-2 border-blue-500/20">
                      <Map />
                    </div>
                    <p className="text-blue-200 text-xs sm:text-sm text-center">
                      Located in the heart of Nairobi&apos;s tech district
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
