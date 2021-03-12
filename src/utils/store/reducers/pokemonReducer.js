const init = {
  pokemons: [],
  type: [],
  isLoading: true
};

export const PokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_ALL_MYPOKEMON':
      return { ...state, pokemons: action.payload, isLoading: false };
    case 'FETCH_POKEMON_TYPE':
      return { ...state, type: action.payload, isLoading: false };
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};
