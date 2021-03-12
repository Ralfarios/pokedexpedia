const url = 'https://pokeapi.co/api/v2';

export const fetchAllPokemon = _ => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      let output = [];

      const response = await fetch(url + '/pokemon?limit=12');
      const { results } = await response.json();

      Promise.all(
        results.map(e => {
          return fetch(e.url)
            .then(response => response.json())
            .then(pokedata => output.push(pokedata));
        })
      )
        .then(_ => {
          return next({ type: 'GET_ALL_POKEMONS', payload: output });
        });
    } catch (err) {
      console.log(err);
    };
  };
};

export const fetchAllType = _ => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const response = await fetch(url + '/type');

      const { results } = await response.json();

      return await next({ type: 'FETCH_POKEMON_TYPE', payload: results });
    } catch (err) {
      console.log(err);
    };
  };
};
