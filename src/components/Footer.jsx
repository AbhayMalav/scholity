import React, { useState } from 'react';

const Box = ({ title, content }) => (
  <div className="bg-gray-800 rounded-lg p-4 w-full sm:w-[calc(50%-0.5rem)] lg:w-56 h-auto flex flex-col space-y-2">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-sm">{content}</p>
  </div>
);

const Footer = () => (
  <footer className="mt-8 text-center">
    {['Community', 'Careers', 'Blog', 'Support', 'Legal'].map((item) => (
      <a key={item} href="#" className="text-blue-400 hover:text-blue-300 mx-2 sm:mx-5 inline-block my-2">
        {item}
      </a>
    ))}
  </footer>
);

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    // Here you would typically handle the subscription logic
  };

  return (
    <div className="bg-transparent mt-5 text-white p-4 sm:p-8">
      {/* Grid layout for small screens, flexbox for large screens */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:flex lg:justify-center lg:space-x-4 mb-8">
        <Box
          title="Community"
          content="A place to get your questions answered, and connect with fellow sovereign individuals."
        />
        <Box
          title="Support"
          content="Get help with installing and troubleshooting umbrelOS and Umbrel Home."
        />
        <Box
          title="Careers"
          content="We're hiring! Join us and shape the future."
        />
        <Box
          title="Stay in the loop"
          content="Follow our journey in enabling individuals to truly own their data. Better yet, be a part of it."
        />
      </div>

      {/* Form with no overflow */}
      <form onSubmit={handleSubmit} className="flex justify-center mt-4 w-full">
  <div className="flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-md">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="w-full sm:w-auto flex-grow p-2 bg-gray-700 rounded-l sm:rounded-none sm:rounded-l-lg" // Fully responsive
      required
    />
    <button
      type="submit"
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-r sm:rounded-none sm:rounded-r-lg w-full sm:w-auto mt-2 sm:mt-0"
    >
      Subscribe
    </button>
  </div>
</form>



      <Footer />
    </div>
  );
}
