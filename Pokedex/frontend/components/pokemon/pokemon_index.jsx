import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';


class PokemonIndex extends React.Component {

  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
                                                                            //this makes it so children must refer to pokes as pokemon
    const renderThesePokemon = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
      <div>
        <ul>
          {renderThesePokemon}
        </ul>
        <Route path="/pokemon/:pokemon_id" component={PokemonDetailContainer}/>
      </div>
    );

  }


}



export default PokemonIndex;
