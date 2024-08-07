import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar flex justify-between text-white font-bold py-5 sticky top-0 bg-navbar-clr z-50 
        ${isScrolled && `blurred`}
        `}
    >
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
