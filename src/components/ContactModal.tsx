"use client";

import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useModal } from '@/context/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Loader2, Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

// Zod schema for form validation
const modalContactSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ModalFormInputs = z.infer<typeof modalContactSchema>;

const ContactModal = () => {
  const { isModalOpen, closeModal, serviceTitle } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ModalFormInputs>({
    resolver: zodResolver(modalContactSchema),
  });

  useEffect(() => {
    if (isModalOpen) {
      // Reset form state when modal opens
      reset();
      setIsSubmitted(false);
      if (serviceTitle) {
        setValue('message', `I'd like to inquire about your ${serviceTitle} service.`);
      } else {
        setValue('message', '');
      }
    }
  }, [isModalOpen, serviceTitle, setValue, reset]);

  // Handle keyboard shortcuts and outside clicks
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const onSubmit: SubmitHandler<ModalFormInputs> = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      setIsSubmitted(true);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md"
          onMouseDown={handleClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full max-w-md m-4 border border-gray-700"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
                    <p className="text-gray-400 mt-3">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button
                      onClick={handleClose}
                      className="mt-8 bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
                      <p className="text-gray-400 mt-2">
                        {serviceTitle ? `Inquiring about ${serviceTitle}` : "Let's discuss your project."}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="space-y-6">
                        {/* Name Input */}
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                          <input
                            id="name"
                            type="text"
                            {...register('name')}
                            className={`peer w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Full Name"
                          />
                          <label htmlFor="name" className="absolute left-12 -top-3 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-blue-400 peer-focus:text-xs">
                            Full Name
                          </label>
                          {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                          <input
                            id="email"
                            type="email"
                            {...register('email')}
                            className={`peer w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Email Address"
                          />
                          <label htmlFor="email" className="absolute left-12 -top-3 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-blue-400 peer-focus:text-xs">
                            Email Address
                          </label>
                          {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email.message}</p>}
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 text-gray-500" />
                          <textarea
                            id="message"
                            {...register('message')}
                            rows={5}
                            className={`peer w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 resize-none ${errors.message ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Your Message"
                          ></textarea>
                          <label htmlFor="message" className="absolute left-12 -top-3 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-blue-400 peer-focus:text-xs">
                            Your Message
                          </label>
                          {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message.message}</p>}
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-4 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105"
                        >
                          {isSubmitting ? (
                            <><Loader2 className="mr-3 h-6 w-6 animate-spin" /> Sending...</>
                          ) : (
                            <><Send className="mr-3 h-5 w-5" /> Submit Inquiry</>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
