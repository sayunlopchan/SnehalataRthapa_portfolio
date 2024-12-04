"use client";

import Link from 'next/link';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dialog from '../../components/Dialog';
import Nav from '../../components/Nav';


// icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { sendMessage } from '../../constant/Route';
import axios from 'axios';

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
    onSubmit: async (values, { resetForm }) => {
      console.log("Form Submitted Data:", values); // Log submitted form data

      try {
        const response = await axios.post(sendMessage, { values });

        console.log("Response from Server:", response.data); // Log server response

        if (response.status === 200) {
          setDialogMessage("Thank you for getting in touch. Your message has been received and will be reviewed soon.");
          setDialogType("success");
          setIsDialogOpen(true);
          resetForm();
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Submission Error:", error); // Log any errors
        setDialogMessage("Failed to send message. Please try again.");
        setDialogType("error");
        setIsDialogOpen(true);
      }
    },

  });

  return (
    <div>
      <Nav />

      <div className="grid grid-cols-1 md:grid-cols-6  space-y-10">
        <section className="col-span-2 p-5 relative">
          <h2 className="font-bold text-2xl">Get in Contact</h2>
          {/* Links */}
          <ul style={{ color: "var(--secondary-text)" }}>
            <li className="hover-border">
              <div className="flex items-center gap-x-2">
                <FiPhone />
                <a href="tel:+9779843069722" target="_blank" rel="noopener noreferrer">Number</a>
              </div>
            </li>
            <li className="hover-border">
              <div className="flex items-center gap-x-2">
                <FaFacebook />
                <a href="https://www.facebook.com/snehalata.raut.50" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </li>
            <li className="hover-border">
              <div className="flex items-center gap-x-2">
                <FaInstagram />
                <a href="https://www.instagram.com/snehalata_888/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </li>
            <li className="hover-border">
              <div className="flex items-center gap-x-2">
                <MdEmail />
                <a href="mailto:sneharthapa@domain.com" target="_blank" rel="noopener noreferrer">Email</a>
              </div>
            </li>
            <li className="hover-border">
              <div className="flex items-center gap-x-2">
                <FaLinkedinIn />
                <a href="https://www.linkedin.com/in/sneharthapa/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </div>
            </li>
            <li className="hover-border">
              <div className="flex items-center gap-x-2">
                <FaWhatsapp />
                <a href="https://wa.me/9779843069722" target="_blank" rel="noopener noreferrer">Whatsapp</a>
              </div>
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
