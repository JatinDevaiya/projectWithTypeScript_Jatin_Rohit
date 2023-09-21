import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from '../services/Users';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || "")
  const items = useSelector((state:any) => state.cart);
  

  const gettoken = () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }
  const logOutFn = () => {
    localStorage.clear();
    setToken("");
    // navigate("/"); 
  };

  useEffect(() => {
    gettoken();
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img className="  animation"
                src="logo.png"
                height={50}
                alt="FUN STORE"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}

            {token ? false : true &&
              <Link className="nav-link " to="signin">
                Login
              </Link>
            }

            {token &&
              <Link className="link-secondary me-3" to="Cart">
                <i className="fas fa-shopping-cart" />
                <a href="">
                  <span className="badge rounded-pill badge-notification bg-danger">
                    {items.length}
                    
                  </span>
                </a>
              </Link>
            }
            {token &&
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=271&h=217&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/ProfilePage">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logOutFn}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
