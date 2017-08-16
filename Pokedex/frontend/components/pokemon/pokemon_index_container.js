import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokeman_index.jsx';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: dispatch(requestAllPokemon())
});
