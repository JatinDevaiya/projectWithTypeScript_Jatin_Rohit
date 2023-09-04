import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./pages/Navbar";
import Sidebar from "./Component/Sidebar";
import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import SearchProduct from "./pages/SearchProduct";
import Home from "./pages/commonPages/Home";
import Navbar from "./pages/Navbar";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        {/* <Sidebar> */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            {/* <Route path="productdetails" element={<ProductDetails />} /> */}
            <Route path="/singleProduct/:id" element={<SingleProduct />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/searchProduct/:keyword" element={<SearchProduct />} />
          </Routes>
        {/* </Sidebar> */}
      </Router>
    </>
  );
};

export default App;
