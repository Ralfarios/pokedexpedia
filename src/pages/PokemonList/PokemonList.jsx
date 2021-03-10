import React from 'react';

import { MetaDecorator } from '../../utils/helmet/MetaDecorator';

export const PokemonList = _ => {
  return (
    <div id="PokemonList">
      <MetaDecorator title="Pokemon List" desc="This is Pokemon List page, you can see all Pokemons in here" />
      <h1>Pokemon List Page</h1>
    </div>
  );
};
