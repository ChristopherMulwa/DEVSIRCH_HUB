"use client";

import { useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { X, LoaderCircle } from 'lucide-react';

const ContactModal = () => {
  const { isModalOpen, closeModal, serviceTitle } = useModal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Pre-fill message when serviceTitle changes, but only if the form is not dirty
    if (serviceTitle) {
      setFormData(prev => ({ ...prev, message: `I'd like to discuss ${serviceTitle}.` }));
    } else {
      // Reset message if modal is opened without a service title
      setFormData(prev => ({ ...prev, message: '' }));
    }
  }, [serviceTitle]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, closeModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => {
                closeModal();
            }, 2000);
        } else {
            const errorData = await response.json();
            setStatus(errorData.message || 'Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Submission error:', error);
        setStatus('An error occurred. Please try again.');
    } finally {
        setIsLoading(false);
        setTimeout(() => {
            setStatus('');
        }, 5000);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-700 mt-1">We'll get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none text-gray-900"></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed">
              {isLoading ? <LoaderCircle className="animate-spin" /> : 'Send Message'}
            </button>
          </div>
          {status && <p className="text-center text-sm mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
