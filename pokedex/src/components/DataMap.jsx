import React from 'react'
import Data from './Data'


function DataMap({pokemonArray}) {
  return (
    <div>
        {pokemonArray.map((pokemon) => { return (
            <Data key={pokemon.name} url={pokemon.url} name={pokemon.name}/>
    )})}
    </div>
  )
}

export default DataMap