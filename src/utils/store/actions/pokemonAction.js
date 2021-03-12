const url = 'https://pokeapi.co/api/v2/';

export const fetchAllType = _ => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const response = await fetch(url + 'type');

      const { results } = await response.json();

      return await next({ type: 'FETCH_POKEMON_TYPE', payload: results });
    } catch (err) {
      console.log(err);
    };
  };
};
