import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const{state,dispatch}=useContextGlobal();
  //const[nombre, setNombre]=useState();
  //const[email, setEmail]= useState();

  const handleNombre=(e)=>{
    //setNombre(e.target.value);
    dispatch({type:"SET_NAME", payload: e.target.value})
  };
  const handleEmail=(e)=>{
    //setEmail(e.target.value);
    dispatch({type:"SET_EMAIL", payload: e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(state.user.name.trim().length>5 && 
      regexEmail.test(state.user.email))
    {
      dispatch({type:"SHOW", payload:true});
      dispatch({type:"ERROR", payload:false});
    }else{
      dispatch({type:"ERROR", payload: true});
    }
  };

  return (
    <div>
      {state.show ?(
        <h2>Gracias {state.user.name}, te contactaremos cuando antes vía mail</h2> 
      ):(
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
              <input 
                type="text"
                value={state.user.name }
                onChange={handleNombre} 
              />
            <label >Correo: </label>
              <input 
                type="email"
                value={state.user.email}
                onChange={handleEmail} 
              />
            <button> Enviar</button>
          </form>
        </>
      )}

      {state.error &&(
        <h4>Por favor verifique su información nuevamente</h4>
      )}
    </div>
  );
};

export default Form;