// react
import { useState } from "react";

// libraries
import { Outlet, NavLink } from "react-router-dom";

// components
import { Hamburger } from "../index";

// CSS
import "./Navbar.css";

function Navbar() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);

  // Toggle open nav menu
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Set Nav bg color on scroll
  // function handleScroll() {
  //   if (window.scrollY >= 1) {
  //     setIsScrolling(true);
  //   } else {
  //     setIsScrolling(false);
  //   }
  // }
  // window.addEventListener("scroll", handleScroll);

  // disable body scroll if mobile menu open
  // if (isOpen) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "visible";
  // }

  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink to="/" className="nav-link" id="logo">
            Dee Celebrant
          </NavLink>
          <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/link2" className="nav-link">
                Link 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/link3" className="nav-link">
                Link 3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/link4" className="nav-link">
                Link 4
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;