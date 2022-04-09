import axios from "axios";
import React, { useState } from "react";
import PokemonOverview from "./components/PokemonOverview";
import Spinner from "./components/Spinner";

function App() {
  
  // state
  const [pokemon, setPokemon] = useState([]);
  const [pokeType, setPokeType] = useState(null);
  const [sprite, setSprite] = useState('https://archives.bulbagarden.net/media/upload/6/66/Spr_RG_Red_1.png');
  const [input, setInput] = useState(null);
  const [submit, setSubmit] = useState(false)
  // variables
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  // axios api request
  const apiCall = async () => {
     axios.get(url).then( (res) => {
      
      setPokemon(res.data);
      setSprite(pokemon.sprites.front_default);
      setPokeType(pokemon.types)
      console.log(pokemon);
      console.log(pokeType)
    });
  };
  // functions
  const getInput = (e) =>{
    setInput(e.target.value)
    setSubmit(false)
    console.log(input)
  }
  const handleSearch = (e) => {
    setSubmit(true)
  }
// wrapper function
  const handleSubmit = (e) => {
    if(e.key === 'Enter' || e.type === 'click'){
    apiCall();
    handleSearch()
    }
    
    
  }
  return (
    <React.Fragment>
    <h1 className="text-center">Pokemon Search</h1>
      <div className="input-group mb-3 w-100">
        <input onKeyDown={handleSubmit} onChange={getInput} type="text" className="form-control" placeholder="pokemon name or dex #" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
      {submit? <PokemonOverview pokeType={pokeType} name={pokemon.name} id={pokemon.id} sprite={sprite}/> : <Spinner />}
    </React.Fragment>
  );
}

export default App;
