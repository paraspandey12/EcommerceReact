import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-8">
      <div className="pl-14 flex items-center justify-center">
        <img src="/logo.jpg" alt="logo" className="h-10 w-10" />
        <h1 className="pl-4 text-4xl font-bold uppercase text-gray-800">
          KidZone
        </h1>
      </div>
      <div>
        <ul className="flex justify-center space-x-4 pl-7 pt-7 text-2xl hover:cursor-pointer">
          <li className="hover:scale-105 hover:underline">Company</li>
          <li className="hover:scale-105 hover:underline">About</li>
          <li className="hover:scale-105 hover:underline">Product</li>
          <li className="hover:scale-105 hover:underline">Office</li>
          <li className="hover:scale-105 hover:underline">Contact</li>
        </ul>
      </div>
      <div className="flex justify-center items-center p-8 space-x-4">
        <img
          src="/insta.jpeg"
          alt="Instagram"
          className="h-12 w-12 hover:scale-105 ease-in-out duration-300"
        />
        <img
          src="/pin.png"
          alt="Pinterest"
          className="h-12 w-12 hover:scale-105 ease-in-out duration-300 rounded-full"
        />
      </div>
      
      <div className="flex justify-center">
        <div className="w-1/2 border-t-2 border-gray-500"></div>
      </div>
      <div className="flex justify-center p-4">
        <p className="text-black">© 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
