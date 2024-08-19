import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="p-4 flex flex-col md:flex-row items-center bg-white shadow-md">
    
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="logo" className="h-10 w-10" />
          <h1 className="pl-4 text-xl md:text-2xl lg:text-2xl font-bold uppercase text-gray-800">KidZone</h1>
        </div>

       
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu}>
            <FaBars size={20} />
          </button>
        </div>
      </div>

   
      <div className={`fixed inset-0 bg-white shadow-md z-50 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <button className="absolute top-4 right-4 text-gray-700" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <ul className="text-lg font-bold text-gray-700 space-y-4">
            <li className="hover:text-blue-500 hover:underline">
              <Link to="/" onClick={toggleMenu}>Shop</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline">
              <Link to="/boys" onClick={toggleMenu}>Boys</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline">
              <Link to="/girls" onClick={toggleMenu}>Girls</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline">
              <Link to="/footwear" onClick={toggleMenu}>Footwear</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline">
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-lg font-bold text-gray-700">
          <li className="hover:text-blue-500 hover:underline">
            <Link to="/">Shop</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link to="/boys">Boys</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link to="/girls">Girls</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link to="/footwear">Footwear</Link>
          </li>
        </ul>
      </div>

      
      <div className="flex items-center space-x-8 mt-4 md:mt-0">
        <Link to="/login" className="flex items-center justify-center h-10 w-24 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all font-bold text-lg text-gray-700">
          Login
        </Link>
        <Link to="/cart" className="hover:text-blue-500">
          <FaShoppingCart size={32} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
