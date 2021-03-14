/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CgSearch } from 'react-icons/cg';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import { SearchIllust } from '../../components/helpers/SearchIllust';
import { PokemonCard } from '../../components/layout/PokemonCard';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { fetchSearchPokemon, resetSearch } from '../../utils/store/actions/pokemonAction';

export const PokemonSearch = _ => {
  const { searchResult, errors, isLoading } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');

  const updateSearch = _ => {
    return fetchSearchPokemon(searchVal);
  };

  // eslint-disable-next-line
  const delayedSearch = useCallback(debounce(updateSearch(), 1000), [searchVal]);

  const handleChangeSearch = e => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    dispatch(resetSearch());
    dispatch(delayedSearch);

    return delayedSearch.cancel;
  }, [searchVal, dispatch, delayedSearch]);

  const PokemonListPage = css`
    @media only screen and (max-width: 575px) {
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 72px;
      height: calc(100vh - 72px);
    }
    @media only screen and (min-width: 575px) {
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
      height: calc(100vh - 72px);
    }
  `;

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
    height: 46px;
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

  const pokemonCardContainerWrapper = css`
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


  if (errors) return <h1>ERROR</h1>

  // console.log(type)

  const metaTitle = `Pokédexpedia | ${!searchVal ? 'Search' : searchVal}`

  return (
    <div id="PokemonList" css={PokemonListPage}>
      <MetaDecorator title={metaTitle} desc="This is Pokemon List page, you can see all Pokemons in here" />

      {/** title */}
      <h2 style={{ marginTop: 0, marginBottom: 18, userSelect: 'none' }}>Looking for Pokémon?</h2>
      {/** title/ */}

      {/** searchbar */}
      <div css={InputGroup} style={{ marginBottom: 12 }}>
        <span css={InputGroupText} id="SearchIcon"><CgSearch /></span>
        <input
          type="text"
          css={FormControl}
          placeholder="Search Pokémon"
          aria-label="pokemon"
          aria-describedby="pokemon-search"
          autoFocus
          onChange={handleChangeSearch}
          value={searchVal}
        />
      </div>
      {/** searchbar/ */}

      {/** search result card */}
      {isLoading ? <h1>NowLoading</h1> :
        searchResult[0] === 'notFound' ? <SearchIllust props='notFound' /> :
          searchResult[0] === 'insertKeyword' ? <SearchIllust props='insertKeyword' /> :
            <>
              <h5 style={{ marginBottom: 12 }}>Search result</h5>
              <div css={pokemonCardContainerWrapper}>
                {searchResult?.map((e) => {
                  return <PokemonCard key={e.id} props={e} />
                })}
              </div>
            </>
      }
      {/** search result card/ */}

    </div >
  );
};
