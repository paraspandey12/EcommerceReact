import React, { useContext, useState } from 'react';
import { MyContext } from './context/MyContext';
import { useParams } from 'react-router-dom';
import Breadcrum from './breadcrum/Breadcrum';
import { useCart } from './context/CartContext';

const Product = () => {
  const { addToCart } = useCart();
  const MainData = useContext(MyContext);
  const { ProductId } = useParams();

  const [quantity, setQuantity] = useState(1);

  const product = MainData.find((e) => e.ProductId === Number(ProductId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const ratings = 4.5;
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleQuantityChange = (event) => {
    const value = Math.max(1, Number(event.target.value)); 
    setQuantity(value);
  };

  const handleClick = () => {
    addToCart({ ...product, quantity }); 
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Breadcrum product={product} />
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row">
          <img
            src={product.ImageURL}
            alt={product.ProductTitle}
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="lg:ml-8 mt-4 lg:mt-0">
            <h1 className="text-3xl font-bold mb-2">{product.ProductTitle}</h1>

            <div className="flex items-center mb-4">
              <div className="text-yellow-500">
                {'★'.repeat(Math.floor(ratings))}{'☆'.repeat(5 - Math.floor(ratings))}
              </div>
              <p className="ml-2 text-gray-600">{ratings} out of 5</p>
            </div>

            <p className="text-xl text-gray-700 mb-4">{product.Colour}</p>
            <p className="text-lg text-gray-900 mb-4">{product.Usage}</p>
            <p className="text-xl font-semibold mb-4">{product.price}</p>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Size</h2>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <label htmlFor="quantity" className="text-lg font-semibold mr-4">Quantity:</label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            <button
              onClick={handleClick}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
