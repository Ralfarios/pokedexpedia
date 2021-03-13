const init = {
  pokemons: [],
  type: [],
  pagination: 0,
  // pagination: [],
  isLoading: true
};

export const PokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'ERASE_DATA_POKEMONS':
      return { ...state, pokemons: [] };
    case 'GET_ALL_POKEMONS':
      console.log(action.payload,' <<<')
      return { ...state, pokemons: action.payload, isLoading: false };
    case 'FETCH_POKEMON_TYPE':
      return { ...state, type: action.payload, isLoading: false };
    case 'PAGINATION_COUNT':
      return { ...state, pagination: action.payload, isLoading: false };
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};
