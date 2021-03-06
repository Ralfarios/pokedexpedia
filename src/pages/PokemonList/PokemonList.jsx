/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CgSearch } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import MetaDecorator from '../../utils/helmet/MetaDecorator';
import SkelPokemonCard from '../../components/helpers/SkelPokemonCard';
import {
  fetchAllPokemon,
  fetchAllType,
  paginationCount,
} from '../../utils/store/actions/pokemonAction';
import { path } from '../../routers/path';

import PokemonCard from '../../components/layout/PokemonCard';
import TypeCard from '../../components/layout/TypeCard';

const PokemonList = _ => {
  let { listpage } = useParams();

  const itemsPerPage = 12;
  const { type, pokemons, pagination, errors, isLoading } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();
  const [arrPagination, setArrPagination] = useState([]);

  const handleSearchPage = _ => {
    return history.push(path.pokemonSearch);
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(pagination / itemsPerPage); i++) {
    pages.push(i);
  };

  const handlePage = page => history.push('/page/' + page);

  useEffect(() => {
    dispatch(fetchAllPokemon((itemsPerPage * Number(listpage)) - itemsPerPage, itemsPerPage));
    dispatch(paginationCount());

    // eslint-disable-next-line
    isNaN(Number(listpage)) ? listpage = 1 : Number(listpage);

    if (Number(listpage) < 3) {
      setArrPagination([1, 2, 3, '...', pages.length])
    } else if (Number(listpage) > pages.length - 2) {
      setArrPagination([1, '...', pages.length - 2, pages.length - 1, pages.length]);
    } else {
      setArrPagination([1, '...', Number(listpage) - 1, Number(listpage), Number(listpage) + 1, '...', pages.length])
    };
  }, [dispatch, listpage, pages.length]);

  useEffect(() => {
    dispatch(fetchAllType());
  }, [dispatch])

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
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    }
    @media only screen and (max-width: 575px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    }
  `;

  if (errors) return <h1>ERROR</h1>

  return (
    <div id="PokemonList" css={PokemonListPage}>
      <MetaDecorator title="Pok??dexpedia | Home" desc="This is Pokemon List page, you can see all Pokemons in here" />

      {/** title */}
      <h2 style={{ marginTop: 0, marginBottom: 18, userSelect: 'none' }}>Looking for Pok??mon?</h2>
      {/** title/ */}

      {/** searchbar */}
      <div css={InputGroup} style={{ marginBottom: 12 }}>
        <span css={InputGroupText} id="SearchIcon"><CgSearch /></span>
        <input
          type="text"
          css={FormControl}
          placeholder="Search Pok??mon"
          aria-label="pokemon"
          aria-describedby="pokemon-search"
          onClick={_ => handleSearchPage()}
          defaultValue=''
        />
      </div>
      {/** searchbar/ */}

      {/** pokemon type card */}
      <h5 style={{ marginBottom: 0 }}>Type</h5>
      <div css={horizontalScrollContainer}>
        <TypeCard props={{ name: 'all', url: '/' }} />
        {type?.map((e, i) => <TypeCard key={i} props={e} />)}
      </div>
      {/** pokemon type card/ */}

      {/** pokemon card */}
      <h5 style={{ marginBottom: 12 }}>Pok??dex</h5>
      <SkeletonTheme color="#dedede" highlightColor="#eee">
        <div css={pokemonCardContainerWrapper}>
          {
            isLoading
              ? new Array(12).fill().map((_, i) => <SkelPokemonCard key={i} />)
              : pokemons?.map((e) => { return <PokemonCard key={e.id} props={e} /> })
          }
        </div>
      </SkeletonTheme>

      {/** pokemon card/ */}

      {/** pagination */}
      <nav aria-label="pagination-pokelist">
        <ul className="pagination justify-content-center" style={{ marginTop: 16, marginBottom: 16 }}>
          <li className="page-item">
            <div
              className="page-link"
              style={{ cursor: 'pointer' }}
              onClick={() => handlePage(Number(listpage) === 1
                ? Number(listpage)
                : isNaN(Number(listpage))
                  ? 1
                  : Number(listpage) - 1)}
            >&laquo;</div>
          </li>
          {arrPagination?.map((e, i) =>
            <li
              key={i}
              className={Number(listpage) === e
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
              onClick={() => handlePage(Number(listpage) === pages?.length
                ? Number(listpage)
                : isNaN(Number(listpage))
                  ? pages?.length
                  : Number(listpage) + 1)}
            >&raquo;</div>
          </li>
        </ul>
      </nav>
      {/** pagination/ */}

    </div >
  );
};

export default PokemonList;
