import React from "react";

const ProjectContainer2 = ({ name, img }) => {
  return (
    <div className="project-card border relative items-end flex-1 sm:w-96 overflow-hidden">
      <img
        src={img}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:blur hover:opacity-50"
        alt=""
      />
      <div className="card-content absolute top-50 left-50 font-bold text-xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ProjectContainer2;
