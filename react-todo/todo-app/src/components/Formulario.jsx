import React, { useEffect, useState } from "react";
import "./formulario.css";
import { nanoid } from "nanoid";

const Formulario = ({
  setUsers,
  users,
  modoEdicion,
  setModoEdicion,
  user,
  setUser,
}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(user);
    setId(user.id);
    setName(user.name);
    setText(user.symptoms);
  }, [user]);

  const handleName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleTextarea = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const newUser = {
    id: nanoid(),
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
    setName("");
    setText("");
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if (name === "" && text === "") {
      console.log("campo vacío!!!");
      return;
    }

    const arrayData = users.map((item) =>
      item.id === id ? { id, name, symptoms: text } : item
    );
    setUsers(arrayData);
    setName("");
    setText("");
    setModoEdicion(false);
  };

  return (
    <form onSubmit={modoEdicion ? handleEdit : handleSubmit}>
      <h3 className="text-center">
        {modoEdicion ? "Editar" : "Crear un nuevo Todo"}
      </h3>
      <hr />
      <label htmlFor="name">Nombre: </label>
      <input
        id="name"
        type="text"
        className="form-control mb-3"
        name="name"
        value={name}
        onChange={(event) => handleName(event)}
      />
      <textarea
        className="form-control"
        placeholder="Escribe tus síntomas"
        name="symptoms"
        value={text}
        onChange={(event) => handleTextarea(event)}
      ></textarea>
      <button
        className={
          modoEdicion ? "btn btn-warning mt-3" : "btn btn-primary mt-3"
        }
        onClick={handleClick}
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
