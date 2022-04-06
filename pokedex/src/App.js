import axios from "axios";
import { useState } from "react";
import DataMap from './components/DataMap'

function App() {
  // state
  const [pokemon, setPokemon] = useState([]);
  // variables
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=20";
  // axios api request
  const apiCall = () => {
    axios.get(url).then((res) => {
      setPokemon(res.data.results)
      console.log(res.data.results);
    });
  };
  return (
    <div>
      <button onClick={apiCall}>click</button>
      <DataMap pokemonArray={pokemon}/>
    </div>
  );
}

export default App;
