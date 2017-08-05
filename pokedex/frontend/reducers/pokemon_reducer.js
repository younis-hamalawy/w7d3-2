import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';


const defaultState = () => ({
  entities: {},
  currentPoke: null
});

const pokemonReducer = (state = defaultState(), action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state, { entities: action.pokemon} );
      // action.pokemon.forEach((poke) => nextState[poke.id] = poke);
      return nextState;
    case RECEIVE_SINGLE_POKEMON:
    // const newPoke = {[action.pokemon.id]: action.pokemon};
      nextState = merge({}, state, {currentPoke: action.pokemon.poke.id});
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
