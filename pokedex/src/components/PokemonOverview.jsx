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
          {/* maps through typing of mon */}
          <ul className="card-text text-capitalize">{pokeType.map(t => (<li>{t.type.name}</li>))}</ul>
          <a href="https://github.com/Paulino101" className="btn btn-primary">GitHub</a>
        </div>
      </div>
  );
}

export default PokemonOverview;
