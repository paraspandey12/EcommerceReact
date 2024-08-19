import React, { useContext } from 'react'

const Newcollection = () => {
  const NewCollection =[
    {
        "ProductId": 34632,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Shoes",
        "ProductType": "Sports Shoes",
        "Colour": "Grey",
        "Usage": "Sports",
        "ProductTitle": "Lotto Men Dolce Vita II Grey Sports Shoes",
        "Image": "34632.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/af21a7dc11fed0430f6c22dd916eccf4_images.jpg"
      },
      {
        "ProductId": 3595,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Shoes",
        "ProductType": "Casual Shoes",
        "Colour": "Red",
        "Usage": "Casual",
        "ProductTitle": "Converse Men's Chuck Taylor Big Check Red Black Canvas Shoe",
        "Image": "3595.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/bdd2eed1b066a2e060bf864cbf8bfece_images.jpg"
      },
      {
        "ProductId": 25572,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Shoes",
        "ProductType": "Sports Shoes",
        "Colour": "Silver",
        "Usage": "Sports",
        "ProductTitle": "Fila Men Superior Silver Sports Shoes",
        "Image": "25572.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/a70ae8bb33c1d5a75df76c3791ed5a9f_images.jpg"
      },
      {
        "ProductId": 44545,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Sandal",
        "ProductType": "Sandals",
        "Colour": "Brown",
        "Usage": "Casual",
        "ProductTitle": "Coolers Men Brown Sandals",
        "Image": "44545.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/007eb7d88e3dc7d17d7cfe15cb8c1ba0_images.jpg"
      },
      {
        "ProductId": 3308,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Shoes",
        "ProductType": "Sports Shoes",
        "Colour": "White",
        "Usage": "Sports",
        "ProductTitle": "Asics Men's Gel Cushioning Running White Black Yellow Shoe",
        "Image": "3308.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/3ad2891fc7b6eb03276bae0a9b85d73d_images.jpg"
      },
      {
        "ProductId": 23824,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Flip Flops",
        "ProductType": "Flip Flops",
        "Colour": "Black",
        "Usage": "Casual",
        "ProductTitle": "Puma Men Java Black Flip Flops",
        "Image": "23824.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/0c9608b07776a13c6d468f6723361b7b_images.jpg"
      },
      {
        "ProductId": 38662,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Shoes",
        "ProductType": "Sports Shoes",
        "Colour": "Blue",
        "Usage": "Sports",
        "ProductTitle": "Nike Men T90 Shoot IV Hg-B Blue Sports Shoes",
        "Image": "38662.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/2935b4863e73f5667c427862b3cf2d2b_images.jpg"
      },
      {
        "ProductId": 40778,
        "Gender": "boys",
        "price": "Rs 399",
        "Category": "Footwear",
        "SubCategory": "Flip Flops",
        "ProductType": "Flip Flops",
        "Colour": "Black",
        "Usage": "Casual",
        "ProductTitle": "Quiksilver Men Black Flip Flops",
        "Image": "40778.jpg",
        "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/cbe97f9c9486c3cd2a90881d9c77b7da_images.jpg"
      }
  ]
  return (
    <div>
      <div className="p-8">
      <h2 className="text-6xl  underline decoration-slice p-4 font-bold mb-6 text-center ">New Footwear Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {NewCollection.map((product) => (
          <div key={product.ProductId} className="border p-4 rounded-lg shadow-lg">
            <img src={product.ImageURL} alt={product.ProductTitle} className="h-40 w-full object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.ProductTitle}</h3>
            <h3 className="text-lg font-semibold">{product.price}</h3>
            
            
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Newcollection
