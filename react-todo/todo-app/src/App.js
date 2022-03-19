import React, { useState } from "react";
import Boton from "./components/Boton";
import Formulario from "./components/Formulario";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <>
      <div className="container-sm mt-5">
        <div className="row">
          <div className="col mt-5">
            <ul className="list-group">
              {users.map((user) => {
                return (
                  <li className="list-group-item">
                    {user.name}
                    <button className="btn btn-warning mx-3">Editar</button>
                    <button className="btn btn-danger">Eliminar</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <Formulario setUsers={setUsers} users={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
