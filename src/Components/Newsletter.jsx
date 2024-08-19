import React from 'react';

const Newsletter = () => {
   
  return (
    <div className="bg-gradient-to-b from-pink-300 to-pink-100 p-10 min-h-screen sm:min-h-0 sm:h-80 flex items-center justify-center">
      <div className="text-center sm:text-left max-w-lg">
        <h1 className="text-2xl sm:text-4xl font-semibold">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="mt-4 sm:mt-6 text-gray-700">
          Subscribe to our Newsletter and stay updated.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center">
          <input
            type="text"
            placeholder="Your email id"
            className="p-3 w-full sm:w-2/3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button  className="mt-4 sm:mt-0 sm:ml-4 p-3 w-full sm:w-auto  bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
