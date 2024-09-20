import React from "react";
import SkillItem from "../Components/SkillItem";

const SkillsSections = () => {
  const skills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "ReactJS",
    "TypeScript",
    "ExpressJS",
    "Python",
    "MongoDB",
    "Flask",
  ];
  return (
    <>
      <section className="text-white p-10">
        <h1 className="text-5xl mb-5">About</h1>
        <div className="ml-10 relative">
          <div className="line border w-10 absolute border-complementary-yellow-clr"></div>
          <span className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, dolore nisi rerum dolor sint maxime voluptatem, fugit
            illum magnam id quidem reiciendis tempore ut tempora totam earum
            obcaecati modi dignissimos. Id, numquam. Laborum beatae assumenda
            libero laboriosam harum voluptatibus, vero quia eius? Animi, labore
            ducimus?
          </span>
        </div>
        <h1 className="my-10 text-4xl flex items-center justify-center ">
          My Skills
        </h1>

        <div className="flex items-center justify-center flex-wrap gap-5 text-white lg:mx-20 ">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsSections;
