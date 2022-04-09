import React from "react";
// todo:
// add svgs dependent on types 

function PokemonOverview({ name, id, sprite, pokeType }) {
  return (
      <div className="card">
        <img src={sprite} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name} {id} </h5>
          <img src="https://pokeapi.co/api/v2/type/12/" alt="" />
          <p className="card-text text-capitalize">{pokeType[0].type.name} {pokeType[1].type.name}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  );
}

export default PokemonOverview;
