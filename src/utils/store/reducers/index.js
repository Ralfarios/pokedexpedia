import { combineReducers } from 'redux';

import { MyPokemonReducer } from './myPokemonReducer';
import { PokemonReducer } from './pokemonReducer';

export default combineReducers({
  myPokemon: MyPokemonReducer, 
  pokemon: PokemonReducer
});
