import React from "react";

const NavigationBar = () => {
  return (
    <nav class="flex justify-between items-center p-5 text-white font-bold">
      <div class="flex items-center">
        <a href="#" class="text-lg">
          Logo
        </a>
      </div>
      <div class="hidden md:flex">
        <ul class="flex space-x-10 px-10 text-xl lg:text-2xl">
          <li>
            <a href="#" class="hover:text-gray-300">
              HOME
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div class="md:hidden"></div>
    </nav>
  );
};

export default NavigationBar;
