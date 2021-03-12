import React from 'react';

import { MetaDecorator } from '../../utils/helmet/MetaDecorator';

export const PokemonDetail = _ => {
  return (
    <div id="PokemonDetail">
      <MetaDecorator title="Pokédex | #Name" desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />
      <h1>Pokemon Detail Page</h1>
    </div>
  );
};
