/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { MyPokemonCard } from './components/MyPokemonCard';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { getMyPokemons } from '../../utils/store/actions/myPokemonAction';

const MyPokemonCard = lazy(() => import('./components/MyPokemonCard'));

export const MyPokemonList = _ => {
  const dispatch = useDispatch();
  const { myPokemons } = useSelector(state => state.myPokemon);

  const MyPokemonListPage = css`
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

  const MyPokemonCardContainerWrapper = css`
    @media only screen and (min-width: 575px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    }
    @media only screen and (max-width: 575px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    }
  `;

  useEffect(() => {
    dispatch(getMyPokemons());
  }, [dispatch])

  return (
    <div id="MyPokemonList" css={MyPokemonListPage}>
      <MetaDecorator title="Pokédexpedia | My Pokédex" desc="This page is contain all of your catched pokemons" />
      {/** title */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ marginTop: 0, marginBottom: 18, userSelect: 'none' }}>My Pokédex</h2>
        <h2 style={{ marginTop: 0, marginBottom: 18, userSelect: 'none', fontWeight: 400 }}>Own: {!myPokemons ? '0' : myPokemons?.length}</h2>
      </div>
      {/** title/ */}
      <Suspense fallback={<div>Loading...</div>}>
        <div css={MyPokemonCardContainerWrapper}>
          {myPokemons?.map((e) => <MyPokemonCard key={e?.UID} props={e} />)}
        </div>
      </Suspense>
    </div>
  );
};
