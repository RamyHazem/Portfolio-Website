import React from "react";

const YellowButton = ({ text, onClick }) => {
  return (
    <button
      className="view-more bg-complementary-yellow-clr p-3 text-black bold font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default YellowButton;
