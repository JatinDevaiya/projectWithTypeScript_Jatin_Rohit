import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SIdebar1 = ({ children }: any) => {
  const [isOpan, setIsOpan] = useState(false);
  const toggle = () => setIsOpan(!isOpan);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log(token,"finial token");

  const logOutFn = () => {
    localStorage.clear();
    navigate("/signIn");
  };
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "180px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpan ? "250px" : "75px",
            transition: { duration: 0.5, type: "spring", damping: 10 },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpan && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Ecommerce Project
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          {/* login Page */}

          {token ? (
            <h5
              onClick={logOutFn}
              style={{ color: "white", textAlign: "center", cursor: "pointer" }}
              className="link"
            >
              Logout
            </h5>
          ) : (
            <NavLink to={"/signIn"} className="link">
              <h5 style={{ color: "white", textAlign: "center" }}>Login</h5>
            </NavLink>
          )}

          <section className="routes">
            {token
              ? SidebarData.map((route, index) => {
                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="link"
                      //   activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpan && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })
              : ""}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SIdebar1;
