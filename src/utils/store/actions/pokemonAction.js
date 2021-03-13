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
        results.map(e => {
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

export const fetchSearchPokemon = val => {
  return async next => {
    try {
      // console.log(val)
      // next({ type: 'LOADING' });
      next({ type: 'ERASE_DATA_POKEMONS' });

      if (val.length <= 3) return next({ type: 'GET_ALL_POKEMONS', payload: [] });

      let output = [];

      const response = await fetch(url + `/pokemon?offset=0&limit=1118`);
      const { results } = await response.json();

      Promise.all(
        results.map(e => {
          return fetch(e.url)
            .then(response => response.json())
            .then(pokedata => output.push(pokedata))
            .catch(err => console.log(err));
        })
      )
        .then(_ => {
          let temp = []
          for (let i = 0; i < output.length; i++) {
            if (output[i].name.toLowerCase().includes(val.toLowerCase())) {
              temp.push(output[i])
            };
          }

          console.log(temp)
          // return next({ type: 'GET_ALL_POKEMONS', payload: temp });
        });
    } catch (err) {
      console.log(err);
    }
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
