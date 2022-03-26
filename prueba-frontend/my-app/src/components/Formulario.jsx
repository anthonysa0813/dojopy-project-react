import React, { useState, useEffect } from "react";
import Message from "./Message";
import { nanoid } from "nanoid";

const Formulario = ({
  todos,
  setTodos,
  user,
  setUser,
  modoEdicion,
  setModoEdicion,
}) => {
  const [todo, setTodo] = useState(""); // tiene el valor de mi input
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    setTodo(user.name);
    setId(user.id);
  }, [user]);

  // habdleSubmit se va a encargar de hacer validaciones
  const handleSubmit = (e) => {
    // detener el envío o el refresh de pantalla
    e.preventDefault();

    // valida si el input está vacío
    if (todo.trim() === "") {
      setError(true);
      return;
    }

    const objectTodo = {
      id: nanoid(),
      name: todo,
    };
    // aquí estamos guardando el nuevo el todo en el array Todos
    setTodos([...todos, objectTodo]);

    setError(false);
    setTodo("");
  };

  const editar = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      setError(true);
      return;
    }

    const arrData = todos.map((item) =>
      item.id === id ? { id: id, name: todo } : todo
    );

    setTodos(arrData);
    // setTodos(arrData);
    setTodo("");
    setModoEdicion(false);
  };

  return (
    <form onSubmit={modoEdicion ? editar : handleSubmit}>
      {error && <Message content={"Todos los campos son obligatorios"} />}
      <h3>
        {modoEdicion ? <h2>Editar Todo</h2> : <h2>Crear un nuevo Todo</h2>}
      </h3>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Escribe una nueva tarea"
        value={todo}
        // estamos guardando el valor del input en un estado "todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className={
          modoEdicion ? "btn btn-warning mt-2" : "btn btn-primary mt-2"
        }
      >
        Crear
      </button>
    </form>
  );
};

export default Formulario;
