import React from "react";
import MainProjects from "../data/MainProjects.json";
import MobileProjectContainer from "../components/MobileProjectContainer";
import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className=" pt-8 text-white">
        <h1 className="text-center text-4xl pt-5 font-bold">Projects </h1>
        <div className="flex flex-col my-10 p-5">
          {MainProjects.map((project, i) => (
            <MobileProjectContainer
              key={i}
              name={project.name}
              languages={project.languages}
              link={project.link}
              img={project.img}
              desc={project.desc}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-10">
          <button
            onClick={() => navigate("/projects")}
            className="view-more bg-complementary-clr p-3 text-black bold font-bold"
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
