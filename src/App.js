import {useEffect, useState} from 'react';
import Pokemon from './components/pokemon/Pokemon';
import axios from 'axios';
import './App.css';

//API
const API = 'https://pokeapi.co/api/v2/pokemon?limit=151';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  
  // Get the response from the API
  useEffect(() => {
    axios.get(`${API}`)
    .then((response)=> {
      // handle success
      // setPokemon({name: response.data.result}) 
      setPokemonData(response.data.results);
       console.log(response.data);
     })
  }, [])

  const getPrev=()=>{
    
  }

  const getNext=()=>{

  }

  return (
    <div className="App">
      <select name='name' id='pokemon'>
        {pokemonData.map((pokemon, id)=>{
        return(
          <option value={pokemon.name} key={`pokemon-${id}`}>{pokemon.name}</option>
          )
        })}
        </select>
     <Pokemon/>
     <button onClick={getPrev}>Prev</button>
     <button onClick={getNext}>Next</button>
    </div>
  );
}

export default App;
