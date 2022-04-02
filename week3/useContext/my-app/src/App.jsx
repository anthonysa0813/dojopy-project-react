import React from "react";
import Form from "./components/Form";
import Products from "./components/Products";
import ContadorProvider from "./context/ContadorContext";
import "./index.css";

const App = () => {
  return (
    // paso 4: importar el provider
    <>
      <ContadorProvider>
        <main>
          <div className="wrapper">
            <div className="mainContainer">
              <Form />
              <Products />
            </div>
          </div>
        </main>
      </ContadorProvider>
    </>
  );
};

export default App;
