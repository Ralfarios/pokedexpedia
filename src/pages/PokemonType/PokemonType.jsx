/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PokemonCard } from '../../components/layout/PokemonCard';
import { TypeCard } from '../../components/layout/TypeCard';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { fetchAllType, fetchTypePokemon } from '../../utils/store/actions/pokemonAction';

export const PokemonType = _ => {
  const { pokemontype } = useParams();
  const dispatch = useDispatch();
  const { type, errors, isLoading } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchAllType());
    dispatch(fetchTypePokemon(pokemontype))
  }, [dispatch, pokemontype])

  const PokemonListPage = css`
    @media only screen and (max-width: 575px) {
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 72px;
    }
    @media only screen and (min-width: 575px) {
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  `;

  const horizontalScrollContainer = css`
    display: flex;
    flex-wrap: nowrap;
    overflow-x  : auto;
    gap: 12px;
    margin-bottom: 12px;
  `;

  const helmetString = 'Pokédexpedia | ' + pokemontype.charAt(0).toUpperCase() + pokemontype.slice(1);

  if (errors) return <h1>Error occured</h1>

  return (
    <div id="PokemonType" css={PokemonListPage}>
      <MetaDecorator title={helmetString} desc="This is Pokemon List page, you can see all Pokemons in here" />

      {/** title */}
      <h2 style={{ marginTop: 0, marginBottom: 18, userSelect: 'none', textTransform: 'capitalize' }}>Type: {pokemontype}</h2>
      {/** title/ */}


      {/** pokemon type card */}
      <h5 style={{ marginBottom: 0 }}>Type</h5>
      <div css={horizontalScrollContainer}>
        <TypeCard props={{ name: 'all', url: '/' }} />
        {type?.map((e, i) => <TypeCard key={i} props={e} />)}
      </div>
      {/** pokemon type card/ */}
    </div>
  );
};
