import "./Layout.css";
import React, { useState } from "react";
import burger_img from "../icons/menu-burger.png";
import { BrowserRouter,NavLink  } from "react-router-dom";
function Layout({children}) {
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
          <NavLink  to='/'><h1>Manufactura Inteligente del concreto</h1></NavLink>
        </div>
      </header>
      
      <div className={open ? `header-menu div-open` : `header-menu div-close`}>
        {/* <a href="/">Home</a>
        <a href="/compression">Compresion</a> */}
        <NavLink className={({isActive}) => (isActive ? "is-active" : 'none')}  to='/'>Home</NavLink>
        <NavLink className={({isActive}) => (isActive ? "is-active" : 'none')}  to='/compression'>Compresion</NavLink>
        <NavLink className={({isActive}) => (isActive ? "is-active" : 'none')}  to='/flexion'>Flexion</NavLink>
        <NavLink className={({isActive}) => (isActive ? "is-active" : 'none')}  to='/asentamiento'>Asentamiento</NavLink>
      </div>
       
      <main >
        {children}
      </main>
    </div>
  );
}

export default Layout;
