import React from 'react';
import { MyContext } from './MyContext';
import {CartProvider} from "./CartContext"
import MainData from "../Assets/MainData.json"

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={MainData}>
      <CartProvider>
        {children}
      </CartProvider>
    </MyContext.Provider>
  );
};

export default MyProvider;
