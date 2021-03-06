const init = {
  myPokemons: [],
  myLoading: true,
  myErrors: null
};

export const MyPokemonReducer = (state = init, action) => {
  switch (action.type) {
    case 'CATCH_POKEMON':
      let temp = [...state.myPokemons, action.payload];
      localStorage.setItem('myPokemons', JSON.stringify(temp));
      return { ...state, myPokemons: temp, myLoading: false };
    case 'GET_MY_POKEMON':
      return { ...state, myPokemons: action.payload, myLoading: false };
    case 'RELEASE_POKEMON':
      const filter = state.myPokemons?.filter(e => e.UID !== action.payload);
      localStorage.setItem('myPokemons', JSON.stringify(filter));
      return { ...state, myPokemons: filter, myLoading: false };
    case 'SET_KEY_POKEMON':
      localStorage.setItem('myPokemons', '');
      return { ...state, myPokemons: [], myLoading: false };
    default:
      return state;
  };
};
