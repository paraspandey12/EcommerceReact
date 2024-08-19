import React, { useContext } from 'react';
import { MyContext } from './context/MyContext';
import { Link } from 'react-router-dom';

const ShopCategory = ({ category }) => {
  const MainData = useContext(MyContext);

  if (!MainData) {
    return <div>Loading...</div>;
  }

  const filteredProducts = MainData.filter(product => 
    product.Gender.toLowerCase() === category.toLowerCase() ||
    product.Category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <p className='text-3xl font-bold p-10'>Showing results for {category}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.ProductId}
              to={`/product/${product.ProductId}`}
              className="border p-4 rounded-lg shadow-lg"
            >
              <img
                src={product.ImageURL}
                alt={product.ProductTitle}
                className="h-40 w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.ProductTitle}</h3>
              <h3 className="text-lg font-semibold">{product.price}</h3>
            </Link>
          ))
        ) : (
          <div>No products found in this category.</div>
        )}
      </div>
    </div>
  );
}

export default ShopCategory;
