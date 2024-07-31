import React from "react";
import projects from "../data/Projects.json";
import ProjectContainer from "./ProjectContainer";
import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="mt-8 pt-8 text-white bg-project-container-clr">
        <h1 className="text-center text-3xl py-5">Projects </h1>
        <div className=" m-5 m-20 px-10 grid sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
          {projects.map((project, i) => (
            <ProjectContainer
              key={i}
              name={project.name}
              languages={project.languages}
              link={project.link}
              img={project.img}
            />
          ))}
        </div>
        <div className="flex justify-center items-center pt-10">
          <button
            onClick={() => navigate("/projects")}
            className="view-more bg-view-more-btn p-3 text-black bold font-bold"
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
