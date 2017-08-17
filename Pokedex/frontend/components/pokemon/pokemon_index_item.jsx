import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonIndexItem = (poke) => {
  return (
    <div className='pokeList'>
      <img src={poke.pokemon.image_url}/>
      <li key={poke.pokemon.id}><Link to={`/pokemon/${poke.pokemon.id}`}>{ poke.pokemon.name }</Link></li>
    </div>
  );
};

// export default PokemonIndexItem;
//why should this be export default instead of exporting const?
