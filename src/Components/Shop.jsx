import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import wavingHand from '/waving-hand.svg';
import WomensCollection from './WomensCollection';
import Banner from './Banner';
import Newcollection from './Newcollection';
import Newsletter from './Newsletter';

const Shop = () => {
  return (
    <div className="bg-pink-100 w-full min-h-screen text-black">
      <div className="flex justify-between items-center p-20">
        <div className="px-14">
          <h1 className="font-bold text-3xl">NEW ARRIVALS ONLY</h1>
          <p className="text-6xl font-bold">
            <div className="flex items-center">
              new
              <img src={wavingHand} className="h-12 w-12 ml-2" alt="Waving Hand" />
            </div>
            collections
            <br /> for your kids
          </p>
          <div className="mt-6 border rounded-full p-4 hover:scale-105 transition-transform duration-300 ease-in-out text-2xl text-center flex justify-center items-center bg-red-500 text-white">
            Latest Collections{" "}
            <span className="p-2">
              <FaArrowRight size={20} />
            </span>
          </div>
        </div>
        
        
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/boys.jpg"
            alt="Boys Collection"
            className="rounded-lg shadow-lg object-cover max-h-96 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
      
      <div className="m-20">
        <WomensCollection />
      </div>
      
     <Banner/>

     <div className='m-20'>
      <Newcollection/>
     </div>
     
     <div className='m-20'>
      <Newsletter/>
     </div>
    </div>
  );
}

export default Shop;
