const init = {
  pokemons: [],
  isLoading: true
};

export const MyPokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_ALL_MYPOKEMON':
      return {...state, pokemons: action.payload, isLoading: false};
    default:
      return state;
  };
};
