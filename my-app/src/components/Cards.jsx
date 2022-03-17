import React from "react";
import "./card.css";

const Cards = ({ name, age, picture }) => {
  return (
    <div className="cardContainer">
      <div className="cardPicture">
        <img src={picture} alt="" />
      </div>
      <div className="cardInfo">
        <h2>Name: {name}</h2>
        <strong>Age: {age}</strong>
      </div>
    </div>
  );
};

export default Cards;
