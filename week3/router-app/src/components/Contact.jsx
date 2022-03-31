import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    profesion: "",
  });

  const navigate = useNavigate();

  const { nombre, profesion } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !profesion.trim()) {
      console.log("heyy estás loco! mandame una infoo");
      return;
    }

    const response = await fetch(`http://localhost:4000/users`, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setUsuario({
      nombre: "",
      profesion: "",
    });
    navigate("/users");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          className="form-control"
          placeholder="Juanito"
          name="nombre"
          onChange={handleChange}
        />

        <label htmlFor="nombre">Profesión: </label>
        <input
          type="text"
          className="form-control"
          placeholder="Design Ux"
          name="profesion"
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default Contact;
