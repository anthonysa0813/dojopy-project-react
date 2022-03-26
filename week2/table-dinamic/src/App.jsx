import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    if (value.length > 2) {
      const filterArr = data.filter((user) => {
        console.log(user.name.toLowerCase().includes(value));
        return user.name.toLowerCase().includes(value) && user;
      });
      console.log(filterArr);
      setData(filterArr);
    } else if (value.length <= 1) {
      getApi();
    }
  }, [value]);

  const getApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form className="w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Busca un usuario"
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2">Buscar</button>
      </form>

      <h1>Users</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>username</th>
          <th>mail</th>
        </tr>
        {data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
