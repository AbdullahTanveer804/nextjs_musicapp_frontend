import { Meteors } from "@/components/ui/meteors";
import React from "react";

const ContactUs = () => {
  return (
    <div className=" relative min-h-screen bg-gray-900 text-white px-4 py-12 pt-36">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-400 mb-10 text-center">
          We'd love to hear from you. Fill out the form and we’ll get back to
          you as soon as possible.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 h-32 bg-gray-800 border border-gray-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <Meteors number={20} />
    </div>
  );
};

export default ContactUs;
