import axios from 'axios'
import '../CSS/Pokedex.css'
import '../CSS/Home.css'
import '../CSS/pokemonCards.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SearchInput from '../pokedex/SearchInput'
import SelectType from '../pokedex/SelectType'
import PokemonCard from '../pokedex/PokemonCard'
import {  useNavigate } from 'react-router-dom'

const Pokedex = () => {

  const [pokemons, setPokemons]=useState()
  const [searchPokemon, setSearchPokemon] = useState()
  const [optionType, setOptionType] = useState('All')


  let navigate = useNavigate();
  useEffect(()=>{

    
    if(optionType !== 'All'){
      const URL=`https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
      .then(res=>{
        const array=res.data.pokemon.map(x=>x.pokemon)
        setPokemons({results:array})
      })
      .catch(err=>console.log(err))

    }else if(searchPokemon){
      const url=`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      const obj={
        results:[{url}]
      }
      setPokemons(obj)
    }else{
      const URL=`https://pokeapi.co/api/v2/pokemon`
      axios.get(URL)
      .then(res=>setPokemons(res.data))
      .catch(err=> console.log(err))
    }
   
  },[searchPokemon, optionType])
  

  const nameTrainer =useSelector(state=>state.nameTrainer)

const redirectioHomeClick = ()=>{
 navigate('/')
}
  
  return (
    <article className='pokedex'>
      <header className='pokedex__header'>
        
        <div className='img__pokedex'>
          <img onClick={redirectioHomeClick}src={'./img/pokedexLogo.png'} alt="" />
        </div>
        

        <div className='header__1'></div>
        <div className='header__2'></div>
      </header>

      <div className='pokedex__option'>
        <h2 className='pokedex__title'>Welcome {nameTrainer}, <span>here you can find your favorite pokemon</span>  </h2>
        <div className='pokedex__form'>
          <SearchInput setSearchPokemon={setSearchPokemon} setOptionType={setOptionType}/>
          <SelectType 
            setOptionType={setOptionType} 
            optionType={optionType}
            setSearchPokemon={setSearchPokemon}
          />
        </div>
      </div>

      <div className='pokemon__container'>
        {
          pokemons?.results.map(pokemon=>(
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>

    </article>
  )
}

export default Pokedex