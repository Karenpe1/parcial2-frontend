import React from 'react'
import { Link } from 'react-router-dom'
import styleNavbar from '../Styles/navbar.module.css'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const{state,dispatch}=useContextGlobal();
  const toggleTheme= ()=>{
    dispatch({type: "TOGGLE_THEME"});
  };
  return (
    <nav className={`${styleNavbar.navbar} ${state.theme ? styleNavbar.light : styleNavbar.dark}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
          <h2>DH Odonto</h2>
      </div>
      <div className={styleNavbar.menu}>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to= "/contact">
            <h4>Contact</h4>
          </Link>
          <Link to="/favs">
            <h4>Favs</h4>
          </Link>
          <button onClick={toggleTheme}>
          {state.theme ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
          </button>
      </div>
    </nav>
  )
}

export default Navbar