export const catchPokemon = pokemon => {
  return async next => {
    try {
      return next({ type: 'CATCH_POKEMON', payload: pokemon });
    } catch (err) {
      console.log(err);
    };
  };
};

export const getMyPokemons = _ => {
  return async next => {
    try {
      if (!localStorage.getItem('myPokemons')) return next({ type: 'SET_KEY_POKEMON' });
      const temp = localStorage.getItem('myPokemons');
      return next({ type: 'GET_MY_POKEMON', payload: JSON.parse(temp) });
    } catch (err) {
      console.log(err);
    };
  };
};

export const releasePokemon = UID => {
  return async next => {
    try {
      return next({ type: 'RELEASE_POKEMON', payload: UID });
    } catch (err) {
      console.log(err);
    };
  };
};
