import React, { useState } from "react";
import "./formulario.css";

const Formulario = ({ setUsers, users }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleTextarea = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const newUser = {
    name: name,
    symptoms: text,
  };

  const handleClick = () => {
    console.log("me clikeaste!!!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" && text === "") {
      console.log("campo vacío!!!");
      return;
    }

    setUsers([...users, newUser]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center">Formulario</h3>
      <hr />
      <label htmlFor="name">Nombre: </label>
      <input
        id="name"
        type="text"
        className="form-control mb-3"
        name="name"
        onChange={(event) => handleName(event)}
      />
      <textarea
        className="form-control"
        placeholder="Escribe tus síntomas"
        name="symptoms"
        onChange={(event) => handleTextarea(event)}
      ></textarea>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
