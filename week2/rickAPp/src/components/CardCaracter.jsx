import React from "react";

const CardCaracter = ({ personaje }) => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src={personaje.image} alt="" />
      </div>
      <h4 className="text-center">{personaje.name}</h4>
    </div>
  );
};

export default CardCaracter;
