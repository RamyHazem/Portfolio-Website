import React from "react";

const Language = ({ language }) => {
  const colors = {
    Python: "#4299e1",
    ReactJS: "#faf089",
    TailwindCSS: "#805ad5",
  };

  return (
    <div
      className="flex items-center p-3 px-5 rounded-3xl bg-gray-600"
      style={{ background: "#444349" }}
    >
      <div
        className="relative w-3 h-3 rounded-full"
        style={{ backgroundColor: colors[language] }}
      ></div>

      <span className="ml-1 text-xs font-black">{language}</span>
    </div>
  );
};

export default Language;
