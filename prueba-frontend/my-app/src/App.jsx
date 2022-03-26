import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    if (value.length >= 2) {
      const arrayFilter = users.filter((user) => {
        return user.name.toLowerCase().includes(value) ? user : null;
      });
      setUsers(arrayFilter);
    } else {
      getApi();
    }
  }, [value]);

  const getApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleChange = (e) => {
    // const {value} = e.target
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Prueba Frontend</h1>
      <hr />

      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Busca un usuario..."
          onChange={handleChange}
        />
      </form>

      <h2>Lista de Usuarios</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
