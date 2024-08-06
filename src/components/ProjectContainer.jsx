import React from "react";

const ProjectContainer = ({ name, languages, link, img, desc }) => {
  return (
    <div className="projects bg-project-container-clr text-white relative overflow-hidden h-40 w-40 flex items-center justify-center group">
      <img
        src={img}
        alt="Image"
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:blur-sm max-w-xs"
      />
      <div className="absolute inset-0 flex flex-col items-center text-white font-bold text-xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h1 className="text-3xl mt-5">{name}</h1>
        <div className="mb-2 flex m-3 pl-3 items-center justify-center sm:text-xs md:text-sm lg:text-base">
          {desc}
        </div>
        <div className="flex">
          {languages.map((language, i) => (
            <img
              src={language}
              className=" md:w-16 md:h-16 sm:w-10 sm:h-10 m-3 rounded mb-8"
              key={i}
            ></img>
          ))}
        </div>
        <button className="view-more bg-view-more-btn p-3 text-black bold font-bold w-8 h-10 flex items-center justify-center flex-end">
          <a href={link}>Repo Link</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectContainer;
