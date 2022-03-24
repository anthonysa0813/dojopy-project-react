import React, { useEffect, useState } from "react";
import CardCaracter from "./CardCaracter";
import "./rickandmorty.css";

const RickAndMorty = () => {
  const [value, setValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [dataApi, setDataApi] = useState([]);

  // este hook se encarga de hacer la petición a la api cuando se recarga la página por primera vez
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    setDataApi(data.results); // []
  };

  const getAPiWithCaracter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${value}`
    );
    const data = await response.json();
    setDataApi(data.results); // []
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // con e.preventDefault prevenimos el envio y el refresh de la página
    e.preventDefault();

    // validaciones de formulario
    if (value.trim() === "") {
      console.log("Campo vacío!!!!");
      // el return va a ser que se termine la función
      return;
    }
    console.log("solicitando a la api.... :D");

    getAPiWithCaracter();
  };

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode ? "globalContainer darkMode" : "globalContainer lightMode"
      }
    >
      <div className="appContainer p-5">
        <div className="wrapper">
          <form className="controlsContainer" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control w-50"
              placeholder="Escribe un personaje"
              onChange={handleChange}
            />
            <button className="btn btn-primary mx-4" type="submit">
              Buscar
            </button>
            <button className="btn btn-dark" onClick={changeMode}>
              Dark mode
            </button>
          </form>
        </div>
      </div>
      <main>
        <h1 className="text-center">Rick and Morty | App</h1>
        <div className="wrapper">
          <div className="personajeGrid">
            {dataApi?.map((personaje) => {
              return <CardCaracter personaje={personaje} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RickAndMorty;
