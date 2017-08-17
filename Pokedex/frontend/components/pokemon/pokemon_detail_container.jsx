import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail.jsx';
import { requestOnePokemon } from '../../actions/pokemon_actions';

// THIS FILE IS DEALING WITH STATE (CONCERNED WITH SUBSCRIBING TO THE STORE)


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
