import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyPokemonCard } from './components/MyPokemonCard';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { getMyPokemons, releasePokemon } from '../../utils/store/actions/myPokemonAction';

export const MyPokemonList = _ => {
  const dispatch = useDispatch();
  const { myPokemons } = useSelector(state => state.myPokemon);

  useEffect(() => {
    dispatch(getMyPokemons());
  }, [dispatch])

  const handleRelease = id => {
    return dispatch(releasePokemon(id));
  };

  console.log(myPokemons);

  return (
    <div id="MyPokemonList">
      <MetaDecorator title="Pokédexpedia | My Pokédex" desc="This page is contain all of your catched pokemons" />
      <h1>My Pokemon List</h1>
    </div>
  );
};
