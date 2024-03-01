import React from "react";

const NavigationBar = () => {
  return (
    <div className="">
      <nav>
        <ul className="flex justify-end flex-column gap-16 text-white font-bold font-sans m-5">
          <li>HOME</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
