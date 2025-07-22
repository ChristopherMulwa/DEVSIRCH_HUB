"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, Send } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

// Dynamically import the Map component to prevent SSR issues
const Map = dynamic(
  () => import('@/components/ContactMap'), // Create a new component for the map
  { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-300 animate-pulse" /> 
  }
);

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  honeypot: z.string().optional(), // Honeypot field
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

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

      toast.success('Message sent successfully!', { id: toastId });
      reset();
    } catch {
      toast.error('Failed to send message. Please try again.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Toaster position="top-right" />
       {/* Hero Section */}
       <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/contactpageheroimage.png"
            alt="Abstract network of connections"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-200">We&apos;d love to hear from you. Reach out to us for any inquiries.</p>
          </motion.div>
        </section>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Form */}
          <motion.div className="p-8 sm:p-12" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Let&apos;s Connect</h1>
            <p className="text-gray-600 mb-8">
              Have a project in mind or just want to say hello? Fill out the form and we&apos;ll get back to you.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Honeypot field */}
                <input type="text" id="honeypot" style={{ display: 'none' }} {...register('honeypot')} />

              <div className="relative mb-6">
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`peer w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-600'}`}
                  placeholder="Full Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Full Name
                </label>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="relative mb-6">
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`peer w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-600'}`}
                  placeholder="Email Address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="relative mb-6">
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="peer w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Phone Number (Optional)"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Phone Number (Optional)
                </label>
              </div>

              <div className="relative mb-6">
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className={`peer w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-600'}`}
                  placeholder="Your Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Your Message
                </label>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-300 flex items-center justify-center disabled:bg-gray-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Info & Map */}
          <motion.div className="bg-blue-600 text-white p-8 sm:p-12 flex flex-col justify-between" variants={itemVariants}>
            <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <ul className="space-y-6">
                    <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                        <Mail className="w-6 h-6 mr-4" />
                        <a href="mailto:info@devsirchhub.co.ke" className="hover:underline">info@devsirchhub.co.ke</a>
                    </motion.li>
                    <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                        <Phone className="w-6 h-6 mr-4" />
                        <a href="tel:+254728094959" className="hover:underline">+254 728 094 959</a>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                        <MapPin className="w-6 h-6 mr-4 mt-1" />
                        <span>Nairobi, Kenya</span>
                    </motion.li>
                </ul>
            </div>
            <div className="mt-8 h-64 w-full rounded-lg overflow-hidden shadow-lg">
                 <Map />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
