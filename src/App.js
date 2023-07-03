// // import logo from './logo.svg';
// // import './App.css';
// // import Login from './Login';
// // import Products from './Products';

// // function App() {
// //   return (
// //     <div>
// //    <Login/>
// //    <Products/>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import Products from './Products';
// // import ProductDetailsPage from './Hooks/ProductDetailsPage';
// // import AddProductForm from './Hooks/AddProductForm';
// import Login from './Login';
// import './App.css';
// const App = () => {
//   return (
//     <Router>
//       <div className="navbar">
//       <nav className='nav'>
//         <ul>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>
//             <Link to="/add-product">Add Product</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       </nav>
//       </div>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//          <Route path="/products" element={<Products />} /> 
//         {/* <Route path="/product/:productId" element={<ProductDetailsPage />} />
//         <Route path="/add-product" element={<AddProductForm />} />
//         <Route path="*" element={<Navigate to="/products" />} /> */} */
//       </Routes>
//     </Router>
//   );
// };
// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Products from './Products';
import ProductInfoPage from './Product_Info_Page/product';
// import AddProductForm from './Hooks/AddProductForm';
import Login from './Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
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

