const init = {
  myPokemons: [],
  myLoading: true,
  myErrors: null
};

export const MyPokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'CATCH_POKEMON':
      let temp = [...state.myPokemons, action.payload];
      localStorage.setItem('myPokemons', JSON.stringify(temp))
      return { ...state, myPokemons: temp, myLoading: false };
    case 'GET_MY_POKEMON':
      return { ...state, myPokemons: action.payload, myLoading: false };
    case 'RELEASE_POKEMON':
      return state;
    default:
      return state;
  };
};
