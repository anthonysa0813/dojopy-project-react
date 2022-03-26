import React, { useState } from "react";

const Boton = ({ color, content }) => {
  return <button className={color}>{content}</button>;
};

export default Boton;
