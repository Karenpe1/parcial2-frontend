import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const lsFavs=JSON.parse(localStorage.getItem("favs")) || [];
const lsTheme=JSON.parse(localStorage.getItem("theme")) || true; 
const initialState = {
  theme: lsTheme,
  favs:lsFavs,
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
    case "FAVS":
      const existFav= state.favs.some(fav=> fav.id=== action.payload.id);
      if(existFav){
        return state;
      }
      return{...state, favs: [...state.favs, action.payload]}
    case "SET_NAME":
      return { ...state, user: {...state.user, name: action.payload }}
    case "SET_EMAIL":
      return {...state, user: {...state.user, email: action.payload}}
    case "TOGGLE_THEME":
      return {...state, theme: !state.theme}
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
  },[]);
  
  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs));
  },[state.favs]);

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(state.theme));

    if(state.theme){
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }else{
      document.body.classList.remove("light-theme")
      document.body.classList.add("dark-theme")
    }
  },[state.theme]);
 
  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal= () => useContext(ContextGlobal);