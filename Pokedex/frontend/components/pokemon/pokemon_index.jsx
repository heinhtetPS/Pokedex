import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';


class PokemonIndex extends React.Component {

  constructor (props) {
    super(props);

    // this.props.requestAllPokemon = this.props.requestAllPokemon.bind(this);
  }

  componentDidMount () {

    this.props.requestAllPokemon();
  }

  render () {

    const renderThesePokemon = this.props.pokemon.map(poke => (
      <div className='pokeList'>
        <img src={poke.image_url}/>
        <li key={poke.id}>{ poke.name }</li>
      </div>
    ));

    return (
      <div>
        <ul>
          { renderThesePokemon }
        </ul>
      </div>
    );

  }


}



export default PokemonIndex;
