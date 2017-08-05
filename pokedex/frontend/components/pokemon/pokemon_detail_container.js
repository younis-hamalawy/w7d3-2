import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = ({pokemon, items}) => ({
  pokemon: pokemon.entities[pokemon.currentPoke],
  items
});


const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
