import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const title= {
  textAlign: "center",
  fontSize: "3em",
  fontWeight:"700",
};

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  
  const {state, dispatch}= useContextGlobal();
  const params= useParams();
  const url= `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    axios(url).then((res)=>{
      dispatch({type:"ID", payload: res.data})
      setTimeout(()=>{
        dispatch({type: "LOADING", payload: false })
      },1000);
    })
  },[])
  return (
    <div className={`${state.theme? "light": "dark"} ${"home"}`}>
      {state.loading ? (
        <>
          <h2 style={title}>Cargando Informacion</h2>
        </>
      ):(
         <>
          <h1>Detail Dentist </h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{state.dataId.name}</td>
                <td>{state.dataId.email}</td>
                <td>{state.dataId.phone}</td>
                <td>{state.dataId.website}</td>
              </tr>
            </tbody>
          </table>
          
         </>
         
      )}
    </div>
  )
}
export default Detail