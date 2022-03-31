import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    console.log(data[0].name);
    setUsers(data);
  };

  return (
    <div className="container main">
      <h1>Usuarios</h1>
      <hr />
      <ul>
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <li>
                {console.log(user)}
                <Link to={`/users/${user.id}/${user.name}`}>{user.name}</Link>
              </li>
            );
          })
        ) : (
          <h4>Cargando....</h4>
        )}
      </ul>
    </div>
  );
};

export default Inicio;
