import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    mail: "",
  });

  // const name = form.name
  const { name, lastname, mail } = form;

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setForm({
      // campo_name: campo_value
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !lastname.trim() || !mail.trim()) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <form className="container p-4" onSubmit={handleSubmit}>
      {error === true ? (
        <p className="alert alert-danger">Todos los campos son obligatorios </p>
      ) : null}
      <h1>Formulario</h1>
      <hr />
      <input
        className="form-control mb-3"
        type="text"
        name="name"
        placeholder="Escribe tu nombre"
        onChange={(e) => handleChange(e)}
      />
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Escribe tu apellido"
        name="lastname"
        onChange={(e) => handleChange(e)}
      />
      <input
        className="form-control mb-3"
        type="mail"
        placeholder="example@gmail.com"
        name="mail"
        onChange={(e) => handleChange(e)}
        autoComplete={true}
      />
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default App;
