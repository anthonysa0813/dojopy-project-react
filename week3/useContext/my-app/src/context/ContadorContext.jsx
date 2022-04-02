import React, { createContext, useState } from "react";

// paso 1: va a tener la instancia de mi context
export const ContadorContext = createContext();

// paso 2: Crear un provider, se encarga de darle acceso a los components hijos los valores ó funciones que tengamos en nuestro estad global (context)

const ContadorProvider = ({ children }) => {
  const [productosArr, setProductosArr] = useState([]);

  return (
    // paso 3:
    <ContadorContext.Provider value={{ productosArr, setProductosArr }}>
      {children}
    </ContadorContext.Provider>
  );
};

export default ContadorProvider;
