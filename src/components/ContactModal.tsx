"use client";

import { useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useModal } from '@/context/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Loader2, Send } from 'lucide-react';
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
    if (serviceTitle) {
      setValue('message', `I'd like to inquire about your ${serviceTitle} service.`);
    } else {
      setValue('message', '');
    }
  }, [serviceTitle, setValue]);

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

      toast.success('Message sent! We will be in touch soon.');
      reset();
      setTimeout(() => {
        closeModal();
      }, 1500);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send message. Please try again later.');
    }
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          onMouseDown={() => closeModal()} // Use onMouseDown for outside click
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md m-4"
            onMouseDown={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Talk</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Send us a quick message.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`peer w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-600'}`}
                      placeholder="Full Name"
                    />
                    <label htmlFor="name" className="absolute left-4 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm">
                      Full Name
                    </label>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`peer w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-600'}`}
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-4 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm">
                      Email Address
                    </label>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={4}
                      className={`peer w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 resize-none ${errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-600'}`}
                      placeholder="Your Message"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-4 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm">
                      Your Message
                    </label>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;