import React from "react";
import { ReactTyped } from "react-typed";
import BubbleBackground from "../components/BubbleBackground";

const MainSection = () => {
  return (
    <section className="main relative h-screen">
      <BubbleBackground />
      <div className="home-text text-white absolute flex flex-col text-6xl xl:text-6xl ">
        <span>I'm Ramy Awad</span>
        <span>
          A {""}
          <ReactTyped
            className="text-complementary-yellow-clr"
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
