import React from "react";

const MainSection = () => {
  return (
    <div className="relative ">
      <img
        src="../images/Home Background.jpg"
        alt="Image"
        className="mix-blend-screen"
      />
      <div className="home-text absolute flex flex-col sm:text-xl md:text-3xl lg:text-2xl xl:text-6xl">
        <span>Hi I'm Ramy Awad</span>
        <span>A Junior Web Developer</span>
      </div>
    </div>
  );
};

export default MainSection;
