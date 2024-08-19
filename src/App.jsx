import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Shop from './Components/Shop'
import Login from './Components/Login'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ShopCategory from './Components/ShopCategory'
import Product from './Components/Product'



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/boys" element={<ShopCategory category="boys" />} />
        <Route path="/girls" element={<ShopCategory category="girls" />} />
        <Route path="/footwear" element={<ShopCategory category="footwear" />} />
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App
