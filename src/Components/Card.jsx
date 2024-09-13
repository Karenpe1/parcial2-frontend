import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";


const Card = ({ doc }) => {
  const {state,dispatch}=useContextGlobal();
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"FAVS", payload: doc});
  };

  return (
    <div className={`${state.theme ? "cardLight" : "cardDark"} ${"card"}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="images/doctor.jpg" alt="" />
        <Link to={"/detail/"+ doc.id}>
          <h3>{doc.name}</h3>
        </Link>
        <Link to={"/detail/"+ doc.id}>
          <h4>{doc.username}</h4> 
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       
          <button onClick={addFav} className="favButton">Add fav</button>

    </div>
  );
};

export default Card;
