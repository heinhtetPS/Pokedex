import React from 'react';
import { requestOnePokemon } from '../../actions/pokemon_actions';



class PokemonDetail extends React.Component {

  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.requestOnePokemon(this.props.match.params.pokemon_id);
    //get id from URL sometime, dont know when
  }

  render () {
      debugger                          //this needs to be changed to Poke items list item
    // const singlePokemon = this.props.pokemon[pokemon];
    const renderItems = this.props.items;
    // .map(item => <li key={item.id} item={item} />);

    return (
      <div>

        <ul>
          {renderItems}

        </ul>
      </div>
    );

  }


}



export default PokemonDetail;
