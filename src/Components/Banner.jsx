import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-between bg-gradient-to-b from-pink-300 to-pink-100 m-14 lg:p-16 rounded-lg shadow-lg">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Kid's <br /> 
          <span className="underline decoration-black decoration-4">Fashion Week</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Nothing to wear? 
          <span className="block lg:inline text-blue-500 text-2xl lg:text-3xl font-bold mt-2 lg:mt-0">Not anymore.</span>
        </p>
      </div>
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <img 
          src="/boybanner.jpg" 
          alt="Kid's Fashion" 
          className="w-full h-48 lg:h-96 object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
};

export default Banner;
