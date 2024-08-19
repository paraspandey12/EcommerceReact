import React from 'react';
import { useCart } from './context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
 
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + (price * quantity);
  }, 0);

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.ProductId} className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{item.ProductTitle}</h2>
                    <p>{item.price} x {item.quantity}</p>
                  </div>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => removeFromCart(item.ProductId)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xl font-semibold">
              Total Price: Rs{totalPrice.toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
