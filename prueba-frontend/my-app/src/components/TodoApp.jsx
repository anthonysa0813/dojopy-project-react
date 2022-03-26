import React, { useState } from "react";
import "../index.css";
import Formulario from "./Formulario";

const TodoApp = () => {
  // todos se va a encargar de tener todo un array de todos
  const [todos, setTodos] = useState([]); // [{}, {}, {}]
  const [modoEdicion, setModoEdicion] = useState(false);
  const [user, setUser] = useState({});

  const eliminarTodo = (id) => {
    const arrData = todos.filter((todo) => todo.id !== id);
    setTodos(arrData);
  };

  const editarTodo = (user) => {
    setModoEdicion(true);
    setUser(user);
  };

  return (
    <>
      <h1 className="text-center">TodoApp</h1>
      <div className="container">
        <div className="row">
          <div className="col-8 mt-5">
            <ul className="list-group">
              {todos.length === 0 && <h1>No hay todos buh :C</h1>}

              {todos.map((item) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={item.id}
                  >
                    {item.name}

                    <div className="buttonContainer">
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => editarTodo(item)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger "
                        onClick={() => eliminarTodo(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-4">
            <Formulario
              setTodos={setTodos}
              todos={todos}
              user={user}
              setUser={setUser}
              modoEdicion={modoEdicion}
              setModoEdicion={setModoEdicion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
