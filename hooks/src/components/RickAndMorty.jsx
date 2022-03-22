import React, { useEffect, useState } from "react";
import CardCaracter from "./CardCaracter";
import "./rickandmorty.css";

const RickAndMorty = () => {
  const [dataApi, setDataApi] = useState([]);

  // useEffect(() => {
  //   console.log("me ejecuté!!!");
  //   getApi();
  // });

  useEffect(() => {
    console.log(dataApi);
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    setDataApi(data.results); // []
  };

  return (
    <>
      <div className="appContainer p-5">
        <div className="wrapper">
          <div className="controlsContainer">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Escribe un personaje"
            />
            <button
              className="btn btn-primary mx-4"
              onClick={() => console.log("me clickeaste!!!")}
            >
              Buscar
            </button>
            <button className="btn btn-dark">Dark mode</button>
          </div>
        </div>
      </div>
      <main>
        <h1 className="text-center">Rick and Morty | App</h1>
        <div className="wrapper">
          <div className="personajeGrid">
            {dataApi.map((personaje) => {
              return <CardCaracter personaje={personaje} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default RickAndMorty;
