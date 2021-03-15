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
      const temp = localStorage.getItem('myPokemons');
      return next({ type: 'GET_MY_POKEMON', payload: JSON.parse(temp) });
    } catch (err) {
      console.log(err);
    };
  };
};

export const releasePokemon = _ => {
  return async next => {
    try {
      console.log('RELEASE THE KRAKEN!');
    } catch (err) {
      console.log(err);
    };
  };
};
