import React from "react";

const SkillItem = ({ name, logo }) => {
  return (
    <div className="skill-item bg-project-container-clr p-32 rounded-xl text-center basis-[calc(25%-1rem)] ">
      <img src={logo} alt="Logo" />
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;
