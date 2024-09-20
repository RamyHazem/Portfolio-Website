import React from "react";
import { ReactTyped } from "react-typed";
import BubbleBackground from "../../../components/BubbleBackground";
import Icon from "../Components/Icon";

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
      <div className="socials absolute right-3 text-white bottom-1 flex flex-col gap-4 items-center">
        <div className="h-24 w-0 border border-complementary-yellow-clr mb-2"></div>
        <Icon name={"github"} rounded />
        <Icon name={"insta"} />
        <Icon name={"whatsapp"} />
        <Icon name={"linkedin2"} />
      </div>
    </section>
  );
};

export default MainSection;
