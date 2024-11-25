import React, { forwardRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import image from '../assets/user-images/user-image-6.jpg';

const Contact = forwardRef((props, ref) => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      const templateParams = {
        from_name: values.fullName,
        fullName: values.fullName,
        email: values.email,
        message: values.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(
          (result) => {
            console.log('Success:', result.text);
            alert('Message sent successfully!');
            resetForm(); // Reset form after successful submission
            setSubmitting(false);
          },
          (error) => {
            console.log('Error:', error.text);
            alert('Something went wrong, please try again later!');
            setSubmitting(false);
          }
        );
    }
  });

  return (
    <div ref={ref} className="mb-20">
      <h2 className="font-bold text-2xl my-3 uppercase">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 order-2 lg:order-none py-20 mx-auto">
          <div
            className="mx-auto h-[260px] w-[300px] sm:h-[300px] sm:w-[450px] md:w-[400px] lg:w-[460px] lg:h-[300px] relative"
            style={{ backgroundColor: 'var(--image-base-contact)' }}
          >
            <div
              className="absolute h-[200px] w-[300px] sm:h-[240px] sm:w-[400px] md:w-[380px] lg:h-[240px] lg:w-[410px] bg-gray-500 right-5 top-7 sm:right-20 md:right-10 lg:right-20"
            >
              <Image
                src={image}
                alt="snehalata r thapa image"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 order-1 lg:order-none p-2">
          <form className="p-6 w-full max-w-md mx-auto" onSubmit={formik.handleSubmit}>
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
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
              ) : null}
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
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
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
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
              ) : null}
            </label>

            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none font-medium ${formik.isSubmitting && 'opacity-50 cursor-not-allowed'}`}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';
export default Contact;
