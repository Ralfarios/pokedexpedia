/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CgSearch } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// import { useLocation } from 'react-router-dom' // For Query Search

import { PokemonCard } from './components/PokemonCard';
import { TypeCard } from './components/TypeCard';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { fetchAllPokemon, fetchAllType, paginationCount } from '../../utils/store/actions/pokemonAction';

export const PokemonList = _ => {
  const itemsPerPage = 12;
  const { type, pokemons, pagination, errors, isLoading } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1);
  const [arrPagination, setArrPagination] = useState([]);
  // SET PAGINATION TO ELIPSIS
  // const { search } = useLocation(); // For Query Search
  // console.log(search); // For Query Search

  const pages = [];
  for (let i = 1; i <= Math.ceil(pagination / itemsPerPage); i++) {
    pages.push(i);
  };

  const handlePage = page => {
    setCurPage(page);
    // return dispatch(paginationCount((itemsPerPage * curPage) - itemsPerPage, itemsPerPage * curPage));
  };

  useEffect(() => {
    dispatch(fetchAllPokemon((itemsPerPage * curPage) - itemsPerPage, itemsPerPage * curPage));
    dispatch(fetchAllType());
    dispatch(paginationCount());

    if (curPage < 3) {
      setArrPagination([1, 2, 3, '...', pages.length])
    } else if (curPage > pages.length - 2) {
      setArrPagination([1, '...', pages.length - 2, pages.length - 1, pages.length]);
    } else {
      setArrPagination([1, '...', curPage - 1, curPage, curPage + 1, '...', pages.length])
    }
  }, [dispatch, curPage]);

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

  const horizontalScrollContainer = css`
    display: flex;
    flex-wrap: nowrap;
    overflow-x  : auto;
    gap: 12px;
    margin-bottom: 12px;
  `;

  const pokemonCardContainerWrapper = css`
    @media only screen and (min-width: 575px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    }
    @media only screen and (max-width: 575px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
    }
  `;

  if (isLoading) return <h1>NowLoading</h1>
  if (errors) return <h1>ERROR</h1>

  // console.log(pokemons)

  return (
    <div id="PokemonList" css={PokemonListPage}>
      <MetaDecorator title="Pokédex | Home" desc="This is Pokemon List page, you can see all Pokemons in here" />

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
        />
      </div>
      {/** searchbar/ */}

      {/** pokemon type card */}
      <div css={horizontalScrollContainer}>
        {type?.map((e, i) => <TypeCard key={i} props={e} />)}
      </div>
      {/** pokemon type card/ */}

      {/** pokemon card */}
      <div css={pokemonCardContainerWrapper}>
        {pokemons?.map((e) => {
          return <PokemonCard key={e.id} props={e} />
        })}
      </div>
      {/** pokemon card/ */}


      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center" style={{ marginTop: 16, marginBottom: 16 }}>
          <li className="page-item">
            <div
              className="page-link"
              style={{ cursor: 'pointer' }}
              onClick={() => setCurPage((prev) => prev === 0 ? prev : prev - 1)}
            >&laquo;</div>
          </li>
          {arrPagination?.map((e, i) =>
            <li
              key={i}
              className={curPage === e
                ? 'page-item active'
                : (e === '...'
                  ? 'page-item disabled'
                  : 'page-item')}
            >
              <button
                className="page-link"
                style={{ cursor: 'pointer' }}
                onClick={() => handlePage(e)}
                disabled={e === '...' ? true : false}
              >{e}</button>
            </li>
          )}
          <li className="page-item">
            <div
              className="page-link"
              style={{ cursor: 'pointer' }}
              onClick={() => setCurPage((next) => next === pagination.length ? next : next + 1)}
            >&raquo;</div>
          </li>
        </ul>
      </nav>

    </div >
  );
};
