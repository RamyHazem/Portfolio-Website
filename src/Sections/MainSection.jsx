import React from "react";
import { ReactTyped } from "react-typed";

const MainSection = () => {
  return (
    <section className="main relative">
      <img src="../images/Home Background.jpg" alt="Image" className="" />
      <div className="home-text text-white absolute flex flex-col text-4xl xl:text-6xl ">
        <span>I'm Ramy Awad</span>
        <span>
          A {""}
          <ReactTyped
            className="text-complementary-clr"
            strings={["Junior Web Developer", "CompE Student"]}
            typeSpeed={100}
            loop
          />
        </span>
      </div>
    </section>
  );
};

export default MainSection;
