import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Usuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({});

  console.log(useParams());

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    setUsuario(data);
  };

  return (
    <div className="container">
      <h3>Usuario id: {id}</h3>
      <strong>Name: {usuario.name}</strong>
    </div>
  );
};

export default Usuario;
