import React from "react";

const YellowButton = ({ text, onClick, link }) => {
  return (
    <button
      className="view-more relative w-32 rounded-lg bg-complementary-yellow-clr p-3 text-black bold font-black"
      onClick={onClick}
    >
      {link ? <a href={link}>{text}</a> : <>{text}</>}
    </button>
  );
};

export default YellowButton;
