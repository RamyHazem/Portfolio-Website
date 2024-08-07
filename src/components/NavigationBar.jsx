import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between text-white font-bold py-5 sticky top-0 bg-navbar-clr z-50">
      <div className="flex flex-start">
        <Link to="/" className="text-lg">
          <img className="h-16 w-32" src="../images/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex space-x-10 px-10 text-greyish-clr">
          <li>
            <Link to="/" className="hover:text-whitish-clr">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-whitish-clr">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-whitish-clr">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
