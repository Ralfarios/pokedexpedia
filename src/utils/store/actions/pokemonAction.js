const url = 'https://pokeapi.co/api/v2';

export const paginationCount = _ => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const { count } = await response.json();

      return next({ type: 'PAGINATION_COUNT', payload: count });

    } catch (err) {
      console.log(err);
    };
  };
};

export const fetchAllPokemon = (offset, limit) => {
  return async next => {
    try {
      next({ type: 'LOADING' });
      next({ type: 'ERASE_DATA_POKEMONS' });

      let output = [];

      const response = await fetch(url + `/pokemon?offset=${offset}&limit=${limit}`);
      const { results } = await response.json();

      Promise.all(
        results.map(async e => {
          return fetch(e.url)
            .then(response => response.json())
            .then(pokedata => output.push(pokedata))
            .catch(err => console.log(err));
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

export const fetchTypePokemon = type => {
  return async next => {
    try {
      // next({ type: 'LOADING' });

      let output = [];

      const response = await fetch(url + `/type`);
      const { results } = await response.json();

      Promise.all(
        results.map(e => {
          if (e.name === type) {
            return fetch(e.url)
              .then(response => response.json())
              .then(typePoke => typePoke.pokemon.map(e => {
                fetch(e.pokemon.url)
                  .then(res => res.json())
                  .then(detailTypePoke => console.log(detailTypePoke))
                  .catch(err => console.log(err))
              }))
              .catch(err => console.log(err))
          }
          return null;
        })
      )

      // await console.log(results, '<<<<<');

    } catch (err) {
      console.log(err);
    };
  };
};

export const fetchSearchPokemon = val => {
  return async next => {
    try {
      // console.log(val)
      next({ type: 'LOADING' });
      next({ type: 'RESET_SEARCH_RESULT' });

      if (val.length <= 3) return next({ type: 'GET_SEARCH_RESULT', payload: ['insertKeyword'] });

      let output = [];

      const response = await fetch(url + `/pokemon?offset=0&limit=1118`);
      const { results } = await response.json();

      Promise.all(
        results.map(e => {
          if (e.name.toLowerCase().includes(val.toLowerCase())) {
            return fetch(e.url)
              .then(response => response.json())
              .then(pokedata => output.push(pokedata))
              .catch(err => console.log(err));
          }
          return null;
        })
      )
        .then(_ => {
          if (output.length === 0) output.push('notFound')
          return next({ type: 'GET_SEARCH_RESULT', payload: output });
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

export const resetSearch = _ => {
  return async next => {
    try {
      return next({ type: 'RESET_SEARCH_RESULT' });
    } catch (err) {
      console.log(err);
    };
  };
};
