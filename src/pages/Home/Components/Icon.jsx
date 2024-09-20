import React from "react";

const Icon = ({ name, rounded }) => {
  return (
    <div>
      <a href="">
        <img
          className={`w-10 h-10 ${rounded && "rounded-full"}`}
          src={`../../../images/${name}.png`}
          alt={`${name}-logo`}
        />
      </a>
    </div>
  );
};

export default Icon;
