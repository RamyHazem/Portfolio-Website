import React from "react";
import YellowButton from "../../../components/YellowButton";
import Language from "./Language";
import { useNavigate } from "react-router-dom";

const MobileProjectContainer = ({ name, languages, link, img, desc }) => {
  const navigate = useNavigate();

  return (
    <div className="project-container flex flex-col items-center justify-center bg-project-container-clr mb-3 p-7 lg:mx-80 rounded-xl">
      {/* <img src={img} alt="Project Image" className="w-32 h-32 m-4" /> */}
      <span className="font-black text-3xl">{name}</span>
      <div className="mb-5 flex items-center justify-center">
        <span className="block text-center text-xs opacity-50 font-black m-1">
          {desc}
        </span>
      </div>
      <div className="mb-5 flex gap-4">
        {languages.map((language, i) => (
          <Language language={language} key={i} />
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="p-4 w-32 rounded-lg font-black"
          style={{ background: "#2f2e34" }}
        >
          Preview
        </button>
        <YellowButton text={"Repo Link"} link={link} />
      </div>
    </div>
  );
};

export default MobileProjectContainer;
