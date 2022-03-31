import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch(`http://localhost:4000/users`);
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    const arrayFilter = users.filter((user) => user.id !== id);
    setUsers(arrayFilter);
  };

  return (
    <div className="container">
      <h3>Lista de Usuarios del backend</h3>
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Profesión</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <>
                <tr key={user.id}>
                  <th scope="row">1</th>
                  <td>{user.nombre}</td>
                  <td>{user.profesion}</td>
                  <td>
                    <button className="btn btn-warning">Editar</button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
