import React from "react";

const ProjectContainer = ({ name, languages, link }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="bg-project-container-clr p-4 text-white rounded">
        <h1>{name}</h1>
        {languages.map((language) => (
          <p>{language}</p>
        ))}
        <h2>{link}</h2>
      </div>
    </div>
  );
};

export default ProjectContainer;
