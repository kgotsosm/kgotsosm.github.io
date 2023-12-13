import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[1000px] bg-[#08192F] flex justify-center items-center p-4 mt-10"
    >
      <form action="https://formspree.io/f/mnqyrbea"
            method="POST" 
            className="flex flex-col max-w-[600px] w-full"
        >
        <div className="pb-8">
          <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-[#2097F3] text-gray-300">
            Contact
          </p>
          <p className="py-2 text-gray-300">
            Send me an email through the form or on kgotsom@protonmail.com
          </p>
        </div>
        <input className="bg-[#CCD6F6] p-2 rounded-sm" type="text" placeholder="Name" name="name" required/>
        <input className="my-4 p-2 bg-[#CCD6F6] rounded-sm" type="email" placeholder="Email" name="email" required/>
        <textarea className="bg-[#CCD6F6] rounded-sm p-2" name="message" rows="10" placeholder="Message" required></textarea>
        <button type="submit" className="text-white border-2 hover:bg-[#2097F3] border-[#2097F3] px-4 py-3 my-8 mx-auto flex items-center">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
