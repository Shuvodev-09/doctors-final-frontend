import React from 'react';
import contactbg from '../../../assets/images/bg-blue 1.png';
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '3rem 0',
      }}
      className="flex items-center justify-center my-10"
    >
      <form className="max-w-lg w-[400px]">
        <div className="text-center text-white mb-4">
          <h2 className="text-secondary font-bold">Contact Us</h2>
          <h2 className="text-3xl pb-6">Stay connected with us</h2>
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md shadow-sm p-2 outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            required
            className="mt-1 block w-full rounded-md shadow-sm p-2 outline-none"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            placeholder="Your Message"
            name="message"
            rows="4"
            required
            className="mt-1 block w-full rounded-md shadow-sm p-2 resize-none outline-none"
            style={{ height: '100px' }}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <PrimaryButton>SUBMIT</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
