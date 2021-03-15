/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchPokemonById } from '../../utils/store/actions/pokemonAction';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { PokemonDetailCatcher } from './components/PokemonDetailCatcher';
import { PokemonDetailHeader } from './components/PokemonDetailHeader';
import { PokemonDetailImage } from './components/PokemonDetailImage';
import { PokemonDetailSpec } from './components/PokemonDetailSpec';

export const PokemonDetail = _ => {
  const dispatch = useDispatch();
  const { pokemonid } = useParams();
  const { pokemon, errors, isLoading } = useSelector(state => state.pokemon);
  let metaTitle;

  useEffect(() => { // eslint-disable-next-line 
    metaTitle = '';
    dispatch(fetchPokemonById(pokemonid));
  }, [dispatch, pokemonid]);

  const handleCol = _ => {
    if (pokemon?.types === undefined) return 'background-color: #00d2d3;';
    switch (pokemon?.types[0]?.type?.name) {
      case 'normal':
        return 'background-color: #00d2d3;';
      case 'fighting':
        return 'background-color: #ff9f43;';
      case 'flying':
        return 'background-color: #48dbfb;';
      case 'poison':
        return 'background-color: #341f97;';
      case 'ground':
        return 'background-color: #875c36;';
      case 'rock':
        return 'background-color: #222f3e;';
      case 'bug':
        return 'background-color: #10ac84;';
      case 'ghost':
        return 'background-color: #c8d6e5;';
      case 'steel':
        return 'background-color: #576574;';
      case 'fire':
        return 'background-color: #ee5253;';
      case 'water':
        return 'background-color: #2e86de;';
      case 'grass':
        return 'background-color: #1dd1a1;';
      case 'electric':
        return 'background-color: #feca57;';
      case 'psychic':
        return 'background-color: #ff9ff3;';
      case 'ice':
        return 'background-color: #0abde3;';
      case 'dragon':
        return 'background-color: #ff6b6b;';
      case 'dark':
        return 'background-color: #2C3A47;';
      case 'fairy':
        return 'background-color: #B33771;';
      case 'unknown':
        return 'background-color: #182C61;';
      case 'shadow':
        return 'background-color: #4b4b4b;';
      default:
        return 'background-color: #4b4b4b;';
    };
  };

  const PokemonDetailPage = css`
    @media only screen and (max-width: 575px) {
      display: 'flex';
      ${handleCol()}
      height: 100vh;
      padding-bottom: 72px;
    }
    @media only screen and (min-width: 575px) {
      ${handleCol()}
      height: 100vh;
      padding-bottom: 12px;
    }
  `;

  if (isLoading) return (
    <>
      <MetaDecorator title="Pokédexpedia" desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />
      <h1>Loading ...</h1>
    </>
  )
  if (errors) return (
    <>
      <MetaDecorator title="Pokédexpedia" desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />
      <h1>ERROR</h1>
    </>
  )

  metaTitle = `Pokédexpedia | ${pokemon?.name}`;

  return (
    <div id="PokemonDetail" css={PokemonDetailPage}>
      <MetaDecorator title={metaTitle} desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />

      <PokemonDetailHeader props={pokemon} />

      <PokemonDetailImage props={pokemon} />

      <PokemonDetailSpec props={pokemon} />

      <PokemonDetailCatcher props={pokemon} />

    </div >

  );
};
