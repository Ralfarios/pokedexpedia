const init = {
  pokemons: [],
  searchResult: [],
  type: [],
  pagination: 0,
  isLoading: true
};

export const PokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'ERASE_DATA_POKEMONS':
      return { ...state, pokemons: [] };
    case 'RESET_SEARCH_RESULT':
      return { ...state, searchResult: ['insertKeyword'] };
    case 'GET_SEARCH_RESULT':
      console.log(action.payload)
      return { ...state, searchResult: action.payload, isLoading: false };
    case 'GET_ALL_POKEMONS':
      return { ...state, pokemons: action.payload, isLoading: false };
    case 'FETCH_POKEMON_TYPE':
      // return { ...state, type: action.payload };
      return { ...state, type: action.payload, isLoading: false };
    case 'PAGINATION_COUNT':
      return { ...state, pagination: action.payload, isLoading: false };
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};
