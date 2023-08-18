import { useState } from "react"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { NavLink } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import { FaBars } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
const SIdebar1 = ({ children }: any) => {
    const [isOpan, setIsOpan] = useState(false)
    const toggle = () => setIsOpan(!isOpan)



    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
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
                width: isOpan ? "200px" : "45px",
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
                      DoSomeCoding
                    </motion.h1>
                  )}
                </AnimatePresence>
    
                <div className="bars">
                  <FaBars onClick={toggle} />
                </div>
              </div>
              <div className="search">
                <div className="search_icon">
                  <BiSearch />
                </div>
                <AnimatePresence>
                  {isOpan && (
                    <motion.input
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={inputAnimation}
                      type="text"
                      placeholder="Search"
                    />
                  )}
                </AnimatePresence>
              </div>
              <section className="routes">
                {SidebarData.map((route, index) => {
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
                })}
              </section>
            </motion.div>
    
            <main>{children}</main>
          </div>
        </>
      );
    };

export default SIdebar1