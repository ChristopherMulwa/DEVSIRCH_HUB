
"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">Send Message</button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <a href="mailto:info@sirchsolutions.co.ke" className="text-gray-600">info@sirchsolutions.co.ke</a>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <a href="tel:+254728094959" className="text-gray-600">+254 728 094 959</a>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <p className="text-gray-600">Nairobi, Kenya</p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h3>
              {/* Social media links will go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
