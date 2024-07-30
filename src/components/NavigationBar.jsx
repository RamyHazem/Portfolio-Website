import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 text-white font-bold">
      <div className="flex items-center">
        <Link to="/" className="text-lg">
          Logo
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="flex space-x-10 px-10 text-xl lg:text-2xl">
          <li>
            <Link to="/" className="hover:text-gray-300">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-gray-300">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden"></div>
    </nav>
  );
};

export default NavigationBar;
