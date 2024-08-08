import React from "react";
import YellowButton from "./YellowButton";

const MobileProjectContainer = ({ name, languages, link, img, desc }) => {
  return (
    <div className="project-container flex flex-col items-center bg-project-container-clr mb-3 p-7 lg:mx-80">
      <img src={img} alt="Project Image" className="w-32 h-32 m-4" />
      <span className="font-black text-3xl">{name}</span>
      <div className="mb-5 flex items-center justify-center">
        <span className="block text-center text-xs text-gray-200 font-black m-1">
          {desc}
        </span>
      </div>
      <div className="mb-5">
        {languages.map((language) => (
          <span>{language}</span>
        ))}
      </div>
      <div className="flex gap-4">
        <button>Preview</button>
        <YellowButton text={"Repo Link"} />
      </div>
    </div>
  );
};

export default MobileProjectContainer;
