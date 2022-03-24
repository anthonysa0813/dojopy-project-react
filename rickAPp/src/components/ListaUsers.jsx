import React, { useState } from "react";

const ListaUsers = () => {
  const usuarios = ["pepe", "juana", "julio", "eduardo", "anabel"];

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setForm(e.target.value);
  };

  return (
    <>
      <h1>Lista de usuarios</h1>
      <hr />
      <ol>
        {usuarios.map((user) => {
          return <li>{user}</li>;
        })}
      </ol>

      <form>
        <label htmlFor="name">Escribe tu nombre: </label>
        <input type="text" onChange={handleChange} />
        <button>crear usuario</button>
      </form>
    </>
  );
};

export default ListaUsers;
