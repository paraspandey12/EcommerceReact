import React  from 'react';

const WomensCollection = () => {
  const womensProducts =[
    {
      "ProductId": 42419,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "White",
      "price": "Rs 649",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Knit White Top",
      "Image": "42419.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg"
    },
    {
      "ProductId": 34009,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "Black",
      "price": "Rs 400",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Black Top",
      "Image": "34009.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg"
    },
    {
      "ProductId": 40143,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "Blue",
      "price": "Rs 500",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Pretty Blossom Blue Top",
      "Image": "40143.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg"
    },
    {
      "ProductId": 23623,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "Pink",
      "price": "Rs 999",
      "Usage": "Casual",
      "ProductTitle": "Doodle Kids Girls Pink I love Shopping Top",
      "Image": "23623.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/ef9685293a987f515492addd034006bf_images.jpg"
    },
    {
      "ProductId": 47154,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Bottomwear",
      "ProductType": "Capris",
      "Colour": "Black",
      "price": "Rs 1299",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Black Capris",
      "Image": "47154.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/5158808a5bdd60c8c8af6999f8481160_images.jpg"
    },
    {
      "ProductId": 25520,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "White",
      "price": "Rs 1299",
      "Usage": "Casual",
      "ProductTitle": "Doodle Kids Girls City Chic White Top",
      "Image": "25520.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/416f7bd57546242fd72a817de0d517e5_images.jpg"
    },
    {
      "ProductId": 31120,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "Pink",
      "price": "Rs 699",
      "Usage": "Casual",
      "ProductTitle": "Palm Tree Girls Pink Top",
      "Image": "31120.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/83f4ab34db71459ba1f80bb8992cf9d5_images.jpg"
    },
    {
      "ProductId": 31118,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "Red",
      "price": "Rs 500",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Red Top",
      "Image": "31118.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/1e3b40d501f5fbbceeab3879db474932_images.jpg"
    },
    {
      "ProductId": 54923,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Bottomwear",
      "ProductType": "Capris",
      "Colour": "Olive",
      "price": "Rs 600",
      "Usage": "Casual",
      "ProductTitle": "Do u speak Green Girls Olive 3/4 Pant",
      "Image": "54923.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/Do-u-speak-Green-Girls-Olive-34-Pant_62311570aeebd7385030de554584a065_images.jpg"
    },
    {
      "ProductId": 31127,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Dress",
      "ProductType": "Dresses",
      "Colour": "Black",
      "price": "Rs 700",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Black Dress",
      "Image": "31127.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/1f7c87ee0ac12c35df8c1dd28e2cd692_images.jpg"
    },
    {
      "ProductId": 47153,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Bottomwear",
      "ProductType": "Capris",
      "Colour": "Pink",
      "price": "Rs 300",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Pink Capris",
      "Image": "47153.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/87321ab7962a30b2e9b01fa16997029c_images.jpg"
    },
    {
      "ProductId": 40144,
      "Gender": "Girls",
      "Category": "Apparel",
      "SubCategory": "Topwear",
      "ProductType": "Tops",
      "Colour": "Pink",
      "price": "Rs 500",
      "Usage": "Casual",
      "ProductTitle": "Gini and Jony Girls Pretty Blossom Pink Top",
      "Image": "40144.jpg",
      "ImageURL": "http://assets.myntassets.com/v1/images/style/properties/1397081a5a637d539b0197aae4a6855e_images.jpg"
    },
  ]
  return (
    <div className="p-8">
      <h2 className="text-4xl  underline p-4 font-bold mb-6 text-center ">Girls's Popular Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {womensProducts.map((product) => (
          <div key={product.ProductId} className="border p-4 rounded-lg shadow-lg">
            <img src={product.ImageURL} alt={product.ProductTitle} className="h-40 w-full object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.ProductTitle}</h3>
            <h3 className="text-lg font-semibold">{product.price}</h3>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensCollection;
