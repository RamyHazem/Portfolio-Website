import React from "react";

const ProjectContainer = ({ name, languages, link, img, desc }) => {
  return (
    <div className="project-container flex flex-col gap-5 items-center bg-project-container-clr mb-3 p-7 lg:mx-80">
      <img src={img} alt="Project Image" className="w-24 h-24" />
      <span className="font-bold text-xl">{name}</span>
      <span className="text-xs">{desc}</span>
      <div>
        {languages.map((language) => (
          <span>{language}</span>
        ))}
      </div>
      <div className="flex gap-4">
        <button>Preview</button>
        <button>Repo Link</button>
      </div>
    </div>
  );
};

export default ProjectContainer;
