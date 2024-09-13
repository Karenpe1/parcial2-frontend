import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();

  return (
    <main className={`${state.theme ? "light" : "dark"} ${"home"}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data && state.data.map((data)=>(
            <Card key={data.id} doc={data}/>
        ))}
      </div>
    </main>
  )
}

export default Home