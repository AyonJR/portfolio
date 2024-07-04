import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_99jzdcv', 'template_atz15xx', form.current, 'ElpWi6ycUOvmEst1d')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div id='contact' className="flex mx-5 lg:mx-0  flex-col items-center py-20 ">
      <div className="max-w-4xl w-full">
        <h1 className="text-blue-400 text-center text-3xl mb-12">Let's <span className='text-white'>Talk</span> </h1>
        <div className="flex flex-col items-center mb-8">
          <p className="text-gray-300 mb-4">
            Feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="flex space-x-6 mb-8">
          <a href="mailto:abdulbaset.ayon@gmail.com" className="text-blue-500 hover:text-blue-600">
              <FaEnvelope size={30} />
            </a>
            
            <a href="https://www.linkedin.com/in/abdul-baset-ayon/" className="text-blue-500 hover:text-blue-600">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/Ayonjr.11?mibextid=ZbWKwL" className="text-blue-500 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://github.com/AyonJR" className="text-blue-500 hover:text-blue-600">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className='flex justify-center'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white bg-opacity-0 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
