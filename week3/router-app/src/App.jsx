import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Users from "./components/Users";
import Usuario from "./components/Usuario";
import "./index.css";

/* 
  BrowserRouter 
*/

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id/:name" element={<Usuario />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
