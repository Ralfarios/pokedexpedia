import React from 'react';

import { MetaDecorator } from '../../utils/helmet/MetaDecorator';

export const MyPokemonList = _ => {
  return(
    <div id="MyPokemonList">
      <MetaDecorator title="Pokédex | My Pokédex" desc="This page is contain all of your catched pokemons" />
      <h1>My Pokemon List</h1>
    </div>
  );
};
