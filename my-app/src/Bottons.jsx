import React from "react";

const Bottons = ({ content }) => {
  // {content: "Ir a youtube"}

  return (
    <div>
      <button className="button">{content}</button>
    </div>
  );
};

export default Bottons;
