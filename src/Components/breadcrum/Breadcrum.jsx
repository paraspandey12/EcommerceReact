import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Breadcrum = ({ product }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <span>HOME</span>
      <FaArrowRight size={20} />
      <span>SHOP</span>
      <FaArrowRight size={20} />
      <span>{product.Gender}</span>
      <FaArrowRight size={20} />
      <span>{product.ProductTitle}</span>
    </div>
  );
};

export default Breadcrum;
