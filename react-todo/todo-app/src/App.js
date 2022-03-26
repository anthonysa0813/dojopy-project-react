import React, { useState } from "react";
import Boton from "./components/Boton";
import Formulario from "./components/Formulario";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [user, setUser] = useState({});

  const eliminar = (id) => {
    const filterData = users.filter((item) => item.id !== id);
    setUsers(filterData);
  };

  const editar = (user) => {
    setModoEdicion(true);
    setUser(user);
  };

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
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => editar(user)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminar(user.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <Formulario
              setUsers={setUsers}
              users={users}
              modoEdicion={modoEdicion}
              setModoEdicion={setModoEdicion}
              user={user}
              setUser={setUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
