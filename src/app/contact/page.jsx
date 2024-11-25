"use client";

import Link from 'next/link';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';  // Import Yup
import emailjs from 'emailjs-com';
import Dialog from '../../components/Dialog';

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [dialogType, setDialogType] = React.useState('');

  // Yup validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, 'Full name must be at least 3 characters')
      .max(50, 'Full name must not exceed 50 characters')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required')
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: ''
    },
    validationSchema, // Apply validation schema here
    onSubmit: (values, { resetForm }) => {
      // Use EmailJS to send the form data
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          values,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Your EmailJS user ID
        )
        .then((response) => {
          console.log('Email sent successfully', response);
          setDialogMessage('Message sent successfully!');
          setDialogType('success');
          setIsDialogOpen(true);
          resetForm(); // Reset form fields after submission
        })
        .catch((error) => {
          console.error('Email sending failed', error);
          setDialogMessage('Failed to send message. Please try again later.');
          setDialogType('error');
          setIsDialogOpen(true);
        });
    }
  });

  return (
    <div>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} className='hover-border'>Home</Link></li>
          <li><Link href={'/about'} className='hover-border'>About</Link></li>
          <li><Link href={'/gallery'} className='hover-border'>Gallery</Link></li>
          <li><Link href={'/blog'} className='hover-border'>Blog</Link></li>
          <li><Link href={'/contact'} className='active hover-border'>Contact</Link></li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-6 mt-20 space-y-10">
        <section className="col-span-2 p-5 relative">
          <h2 className="font-bold text-2xl">Get in Contact</h2>
          {/* Links */}
          <ul style={{ color: "var(--secondary-text)" }}>
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
              <a href="https://www.linkedin.com/in/sneharthapa/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
          </ul>

          {/* shapes */}
          <div className="size-[100px] md:size-[200px] border-2 absolute top-[30%] left-[30%] md:top-[15%] md:left-[10%] -z-10"></div>
          <div className="size-[100px] md:size-[200px] rounded-full bg-blue-200 absolute top-[40%] left-[40%] md:top-[25%] md:left-[40%] -z-10"></div>
          {/* shapes */}
        </section>

        <section className="col-span-4">
          <form onSubmit={formik.handleSubmit} className="p-6 w-full max-w-md mx-auto">
            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your full name"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
              )}
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Email</span>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Message</span>
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your message"
                rows="4"
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
              )}
            </label>

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none font-medium"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {formik.status && <p className="text-center text-lg mt-4">{formik.status}</p>}
        </section>
      </div>

      {/* Dialog Component for success or error message */}
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
