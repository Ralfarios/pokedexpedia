/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CgSearch } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { useLocation } from 'react-router-dom' // For Query Search

import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { TypeCard } from './components/TypeCard';
import { fetchAllType } from '../../utils/store/actions/pokemonAction';

export const PokemonList = _ => {
  const { type, errors, isLoading } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  // const { search } = useLocation(); // For Query Search
  // console.log(search); // For Query Search

  useEffect(() => {
    dispatch(fetchAllType());
  }, [dispatch]);

  const InputGroup = css`  
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    border-radius: 1.25rem;
    box-shadow: 0 .04rem .08rem rgba(0,0,0,.15);
  `;

  const InputGroupText = css`
    display: flex;
    flex: 0;
    align-items: center;
    padding: 0.375rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #fff;
    border-radius: 1.25rem 0 0 1.25rem;
  `;

  const FormControl = css`
    border-left: none;
    height: 30px;
    display: block;
    flex: 2;
    width: 100%;
    padding: 0.375rem 1rem 0.375rem 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    border-radius: 0 1.25rem 1.25rem 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
  `;

  const horizontalScrollContainer = css`
    display: flex;
    flex-wrap: nowrap;
    overflow-x  : auto;
    gap: 12px;
  `;

  if (isLoading) return <h1>NowLoading</h1>

  return (
    <div id="PokemonList" style={{ paddingLeft: 24, paddingRight: 24 }}>
      <MetaDecorator title="Pokédex | Home" desc="This is Pokemon List page, you can see all Pokemons in here" />

      {/** title */}
      <h2 style={{ marginTop: 0 }}>Looking for Pokémon?</h2>
      {/** title/ */}

      {/** searchbar */}
      <div css={InputGroup} style={{ marginBottom: 24 }}>
        <span css={InputGroupText} id="SearchIcon"><CgSearch /></span>
        <input type="text" css={FormControl} placeholder="Search Pokémon" aria-label="pokemon" aria-describedby="pokemon-search" />
      </div>
      {/** searchbar/ */}

      {/** pokemon type card */}
      <div css={horizontalScrollContainer}>
        {type?.map((e, i) => <TypeCard key={i} props={e} />)}
      </div>
      {/** pokemon type card/ */}


    </div>
  );
};
