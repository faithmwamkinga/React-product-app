import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Products from './Products';
import ProductInfoPage from './Product_Info_Page/product';
import Login from './Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <ul>
          
              <Link to="/products">Products</Link>
           
              <Link to="/add-product">Add Product</Link>
           
              <Link to="/login">Login</Link>
           
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductInfoPage />} />
        {/* <Route path="/add-product" element={<AddProductForm />} />
        <Route path="*" element={<Navigate to="/products" />} />  */}
      </Routes>
    </Router>
  );
};

export default App;

