import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./pages/vNavbar";
// import Sidebar from "./Component/Sidebar";
import SIdebar1 from "./Component/SIdebar1";

const App: React.FunctionComponent=() =>{
  return (
    <>
      {/* <Navbar /> */}

      <Router>
      <SIdebar1/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
