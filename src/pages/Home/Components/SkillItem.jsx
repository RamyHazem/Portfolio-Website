import React from "react";

const SkillItem = ({ name, logo }) => {
  return (
    <div className="skill-item bg-project-container-clr rounded-xl text-center p-20 lg:p-32 w-50 h-50">
      <img src={logo} alt="Logo" />
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;
