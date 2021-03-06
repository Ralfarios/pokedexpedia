const init = {
  pokemons: [],
  pokemon: {},
  searchResult: [],
  type: [],
  pokemonsType: [],
  pagination: 0,
  isLoading: true,
  errors: null
};

export const PokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'RESET_ALL_POKEMONS':
      return { ...state, pokemons: [] };
    case 'RESET_SEARCH_RESULT':
      return { ...state, searchResult: ['insertKeyword'] };
    case 'RESET_POKEMONS_BY_TYPE':
      return { ...state, pokemonsType: [] };
    case 'RESET_POKEMON_DETAIL':
      return { ...state, pokemon: {} };
    case 'GET_SEARCH_RESULT':
      return { ...state, searchResult: action.payload, isLoading: false };
    case 'GET_ALL_POKEMONS':
      return { ...state, pokemons: action.payload, isLoading: false };
    case 'GET_POKEMONS_BY_TYPE':
      return { ...state, pokemonsType: action.payload, isLoading: false };
    case 'GET_POKEMON_TYPE':
      return { ...state, type: action.payload };
    case 'GET_POKEMON_DETAIL':
      return { ...state, pokemon: action.payload, isLoading: false };
    case 'PAGINATION_COUNT':
      return { ...state, pagination: action.payload, isLoading: false };
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};
