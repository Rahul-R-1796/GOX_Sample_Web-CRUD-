import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ProductCart from './Components/ProductCart';
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
      <div className="Header_btt">
          <div className="Logo">
            <a href="/">
              <img
                alt="Two Minute Reports"
                loading="lazy"
                width="148"
                height="58"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/GO%20X%20LOGO%202%20148.png&w=384&q=75"
              />
            </a>
          </div>
          <div className='ul-buttons'>
            <a className="Home_a" href="/">
              Home
            </a>
            <a className="Home_a" href="/product-cart">
              Cart
            </a>
            <a className="Home_a" href="https://github.com/Rahul-R-1796?tab=repositories" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-cart" element={<ProductCart />} />
        </Routes>
    
    </Router>
  );
}
