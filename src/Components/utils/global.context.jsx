import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  theme: "",
  data:[],
  loading:true,
  dataId:{},
  show:false,
  user:{
    name:"",
    email:"",
  },
  error:false,
}
const ContextGlobal = createContext();

const reducer = (state, action)=>{
  switch(action.type) {
    case "GET_DOC":
      return {...state, data: action.payload};
    case "ID":
      return {...state, dataId: action.payload};
    case "LOADING":
      return {...state, loading: action.payload}
    case "SHOW":
      return {...state, show: action.payload}
    case "ERROR":
      return {...state, error: action.payload}
    case "SET_NAME":
      return { ...state, user: {...state.user, name: action.payload }}
    case "SET_EMAIL":
      return {...state, user: {...state.user, email: action.payload}}
    default:
      throw new Error();
  }
};

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const[state,dispatch]=useReducer(reducer, initialState);
  const url= "https://jsonplaceholder.typicode.com/users"
  useEffect(()=>{
    axios(url).then((res)=>{
      console.log(res.data)
      dispatch({type: "GET_DOC", payload: res.data})
    })
  },[])
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal= () => useContext(ContextGlobal);