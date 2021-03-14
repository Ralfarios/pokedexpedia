/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchPokemonById } from '../../utils/store/actions/pokemonAction';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';

export const PokemonDetail = _ => {
  const dispatch = useDispatch();
  const { pokemonid } = useParams();
  const { pokemon, errors, isLoading } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonById(pokemonid));
  }, [dispatch, pokemonid]);

  if (isLoading) return <h1>Loading ...</h1>

  console.log(pokemon);

  return (
    <div id="PokemonDetail">
      <MetaDecorator title="Pokédexpedia | #Name" desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />
      <h1>Pokemon Detail Page</h1>
      <p>{JSON.stringify(pokemon)}</p>
    </div>
  );
};
