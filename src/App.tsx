import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Sidebar from "./Component/Sidebar";

const App: React.FunctionComponent=() =>{
  return (
    <>

      <Router>
      <Sidebar >
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </Sidebar>
      </Router>
    </>
  );
}

export default App;
