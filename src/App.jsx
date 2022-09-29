import './CSS/Home.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Pokedex from "./components/Pokedex"
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from "./components/ProtectedRoutes"
import Footer from './components/Footer'

function App() {






//! este es el nuevo comentario de andre y josue 

  return (
    <>
     <Routes>
    
    <Route path="/" element={<Home />} />

    <Route element={<ProtectedRoutes/>}>
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokedex/:name" element={<PokemonDetails/>} />
    </Route>
  </Routes>

  <Footer/>

    </>
   


   

  )
}

export default App
