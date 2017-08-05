import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';


const rootReducer = combineReducers({
  // state shape
  pokemon: pokemonReducer
});


export default rootReducer;
