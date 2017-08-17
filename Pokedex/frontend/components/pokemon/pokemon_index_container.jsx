import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index.jsx';
import { requestAllPokemon } from '../../actions/pokemon_actions';

// THIS FILE IS DEALING WITH STATE (CONCERNED WITH SUBSCRIBING TO THE STORE)


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
