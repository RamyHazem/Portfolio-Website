import React, { useState } from "react";
import projects from "../data/Projects.json";
import ProjectContainer from "./ProjectContainer";

const ProjectSection = () => {
  return (
    <>
      <section className="mt-8 text-white bg-project-container-clr">
        <h1 className="text-center text-3xl">Projects </h1>
        <div className="m-5 flex flex-wrap -mx-2 justify-center">
          {projects.map((project) => (
            <ProjectContainer
              name={project.name}
              languages={project.languages}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
