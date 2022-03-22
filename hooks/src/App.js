import React, { useState } from "react";
import ListaUsers from "./components/ListaUsers";
import RickAndMorty from "./components/RickAndMorty";

const App = () => {
  const [encendido, setEncedido] = useState(true); // [undefined, function(){}]

  const cambioDeEstado = () => {
    setEncedido(!encendido);
  };

  return (
    <>
      {/* <button onClick={cambioDeEstado}>Mostrar el mensaje</button>

      {encendido == true ? <h1>Mensaje ocultoo</h1> : null}
      <ListaUsers /> */}
      <RickAndMorty />
    </>
  );
};

export default App;
