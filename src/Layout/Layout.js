import "./Layout.css";
import React, { useState } from "react";
import burger_img from "../icons/menu-burger.png";
import { BrowserRouter, NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Layout({ children }) {
  const [open, setOpen] = useState();
  const handleOnOpen = (e) => {
    setOpen(!open);
  };

  return (
    <div className="Layout">
      <header className="Layout-header">
        <div className="header-container">
          <div className="header-menu">
            <img src={burger_img} onClick={handleOnOpen} />
          </div>
          <NavLink to="/">
            <h1>Manufactura Inteligente del concreto</h1>
          </NavLink>
        </div>
      </header>

      <div className={open ? `header-menu div-open` : `header-menu div-close`}>
        {/* <a href="/">Home</a>
        <a href="/compression">Compresion</a> */}
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "none")}
          to="/"
        >
          Home
        </NavLink>

        <Accordion>
          <AccordionSummary>Prediccion de la compresión</AccordionSummary>
          <AccordionDetails>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "link-menu")}
              to="/compression"
            >
             Mostrar evaluación de los modelos
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "link-menu")}
              to="/compression-data"
            >
              Predecir con datos
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Prediccion de la flexión</AccordionSummary>
          <AccordionDetails>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "link-menu")}
              to="/flexion"
            >
             Mostrar evaluación de los modelos
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "link-menu")}
              to="/flexion-data"
            >
              Predecir con datos
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Prediccion del asentamiento</AccordionSummary>
          <AccordionDetails>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "link-menu")}
              to="/asentamiento"
            >
             Mostrar evaluación de los modelos
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "link-menu")}
              to="/asentamiento-data"
            >
              Predecir con datos
            </NavLink>
          </AccordionDetails>
        </Accordion>
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
