import React from "react";
import { Link } from "react-router-dom";


const Card = ({ doc }) => {
  const {name, username, id} = doc;
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="images/doctor.jpg" alt="" />
        <Link to={"/detail/"+ id}>
          <h3>{name}</h3>
        </Link>
        <Link to={"/detail/"+ id}>
          <h4>{username}</h4> 
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       
          <button onClick={addFav} className="favButton">Add fav</button>

    </div>
  );
};

export default Card;
