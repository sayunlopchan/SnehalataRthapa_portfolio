"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Dialog from '../../components/Dialog';

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogType, setDialogType] = useState('');

  const validate = () => {
    const newErrors = {};
    if (formData.fullName.trim().length < 3 || formData.fullName.trim().length > 50) {
      newErrors.fullName = 'Full name must be between 3 and 50 characters.';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log('Email sent successfully', response);
        setDialogMessage('Message sent successfully!');
        setDialogType('success');
        setIsDialogOpen(true);
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email sending failed', error);
        setDialogMessage('Failed to send message. Please try again later.');
        setDialogType('error');
        setIsDialogOpen(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: 'var(--secondary-text)' }}>
          <li><Link href={'/'} className="hover-border">Home</Link></li>
          <li><Link href={'/about'} className="hover-border">About</Link></li>
          <li><Link href={'/gallery'} className="hover-border">Gallery</Link></li>
          <li><Link href={'/blog'} className="hover-border">Blog</Link></li>
          <li><Link href={'/contact'} className="active hover-border">Contact</Link></li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-6 mt-20 space-y-10">
        <section className="col-span-2 p-5 relative">
          <h2 className="font-bold text-2xl">Get in Contact</h2>
          <ul style={{ color: 'var(--secondary-text)' }}>
            <li className="hover-border">
              <a href="tel:+9779843069722" target="_blank" rel="noopener noreferrer">Number</a>
            </li>
            <li className="hover-border">
              <a href="https://www.facebook.com/snehalata.raut.50" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="hover-border">
              <a href="https://www.instagram.com/snehalata_888/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li className="hover-border">
              <a href="mailto:sneharthapa@domain.com" target="_blank" rel="noopener noreferrer">Email</a>
            </li>
            <li className="hover-border">
              <a href="https://www.linkedin.com/in/sneharthapa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </section>

        <section className="col-span-4">
          <form onSubmit={handleSubmit} className="p-6 w-full max-w-md mx-auto">
            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your full name"
              />
              {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your message"
                rows="4"
              />
              {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
            </label>

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </section>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        message={dialogMessage}
        type={dialogType}
      />
    </div>
  );
};

export default Page;
