import React, { useState } from "react";
import Bottons from "./Bottons";
import "./App.css";
import fotito from "./images/photo.jpg";

import Counter from "./components/Counter";
import Cards from "./components/Cards";
const App = () => {
  // age va a contener el valor de nuestro estado
  // setAge va a modificar el valor de mi estado
  const [edad, cambiarEdad] = useState(25);

  return (
    <>
      {/* <div>
        <h1>Hola, soy Anthony</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
          sunt at id. Voluptas porro ipsum ut nihil dolorum molestiae eaque,
          vitae laborum tenetur fuga maxime iure, dicta cum itaque?
        </p>
        <Bottons content={1 + 1} />
        <Bottons content={"Ir a youtube"} />
        <Bottons content="Ir a instagram" />
        <img src={fotito} alt="" />
      </div>
      <div className="container">
        <h2>Soy un subtitulo</h2>
      </div> */}
      {/* 
      <Counter />

      <Cards name="Julio Iglesias" age={25} picture={fotito} />
      <Cards name="Ana Caceres" age={28} picture={fotito} />
      <Cards name="Shakira" age={40} picture={fotito} /> */}

      <Bottons content={"Ir a facebook"} color="primary" />
      <Bottons content={"Ir a youtube"} color="danger" />
    </>
  );
};

export default App;
