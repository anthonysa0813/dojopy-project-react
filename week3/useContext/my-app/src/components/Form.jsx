// paso 5: utilizar el context
import React, { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";
import { Formulario } from "../styled/styles";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const context = useContext(ContadorContext);
  const { productosArr } = context;

  return (
    <Formulario className="formulario" onSubmit={handleSubmit}>
      <h2>Formulario:</h2>
      <button className="btn btn-dark">
        Contador de productos: {productosArr.length}
      </button>
      <hr />
      <label htmlFor="">Escribe tu nombre:</label>
      <input type="text" />
    </Formulario>
  );
};

export default Form;
