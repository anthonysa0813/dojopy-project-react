import React from "react";
import "./bottons.css";

const Bottons = ({ content, color = "secondary" }) => {
  // el content es una propiedad que va a ir cambiando cada vez que instanciemos el botón.
  return (
    <div>
      <button className={`button ${color}`}>{content}</button>
    </div>
  );
};

export default Bottons;
