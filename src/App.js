import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import ProductDetails from './Components/pages/ProductDetails';
import NotFoundPage from './Components/pages/NotFoundPage';
import Navigation from './Components/Common/Navigation';
import Home from './Components/pages/Home'
import CartPage from './Components/pages/CartPage';
import ProductListing from './Components/pages/ProductListing';
import Checkout from './Components/pages/Checkout';
import Footer from './Components/Common/Footer';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/ProductDetails/:title" element={<ProductDetails />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
