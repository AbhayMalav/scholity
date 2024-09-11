import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      <header className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center">
          Let's talk about 
          <span className="text-blue-500 bg-clip-text"> the idea</span>
        </h1>
        <p className="text-lg text-center text-neutral-500 mt-4">
          We'd love to hear from you. Please reach out to us with any questions, suggestions, or business inquiries.
        </p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full bg-neutral-900 p-8 rounded-lg shadow-lg">
          <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm text-neutral-400 mb-2">Your Name</label>
                <input type="hidden" name="access_key" value="bc55623e-806f-4e1c-8791-20c233c15d16"></input>
                <input
                  type="text"
                  className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                    name="name" required
                  
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-neutral-400 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                   name="email" required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Enter your message"
                name="message" required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
