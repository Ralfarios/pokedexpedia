/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react';
import { CgPokemon, CgHeart } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMyPokemons } from '../../utils/store/actions/myPokemonAction';
import { path } from '../../routers/path';

const Bottombar = _ => {
  const dispatch = useDispatch();
  const { myPokemons } = useSelector(state => state.myPokemon);
  const { pathname } = useLocation();
  const headEP = pathname.split('/')[1]

  const BottomBar = css`
    @media only screen and (min-width: 575px) {
      display: none;
    }
  `;

  const BottomBarContainer = css`
    @media only screen and (max-width: 575px) {
      position: fixed;
      background-color: white;
      border-radius: 1.25rem;
      bottom: 16px;
      width: auto;
      height: 56px;
      z-index: 999;
      justify-content: center;
      display: flex;
      box-shadow: 0 .08rem .16rem rgba(0,0,0,.15);
    }
    @media only screen and (min-width: 575px) {
      display: none;
    }
  `;

  const ButtonContainerActive = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #b6302f;
    border-radius: .9rem;
    margin-left: 1.2vw;
    margin-right: 1.2vw; 
    transition: 300ms;
  `;

  const ButtonContainer = css`
    -webkit-tap-highlight-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: .9rem;
    margin-left: 1.2vw;
    margin-right: 1.2vw; 
    cursor: pointer;
    transition: 300ms;
    &:hover {
      background-color: #e0e0e0;
    }
    .&:active {
      background-color: #cecece;
      transition: 300ms;
    }
  `;

  const ButtonIconActive = css`
    margin-left: 8px;
    margin-right: 8px;
    color: white;
    transition: 300ms;
    align-self: center;
  `;

  const ButtonIcon = css`
    margin-left: 8px;
    margin-right: 8px;
    color: #222222;
  `;

  useEffect(() => {
    dispatch(getMyPokemons());
  }, [dispatch]);

  return (
    <div
      id="Bottombar"
      css={BottomBar}
      style={pathname === path.notFound || headEP === 'pokemon'
        ? { display: 'none' }
        : { display: 'flex', justifyContent: 'center' }}
    >
      <div css={BottomBarContainer}>

        {/** icons */}
        <div style={{ display: 'flex', padding: 8 }}>
          <Link
            to={path.pokemonList}
            style={{ textDecoration: 'none', color: '#fff' }}
            css={pathname === path.pokemonList || headEP === 'page'
              ? ButtonContainerActive
              : ButtonContainer}
          >
            <CgPokemon size="2em" css={pathname === path.pokemonList || headEP === 'page' ? ButtonIconActive : ButtonIcon} />
          </Link>

          <Link
            to={path.myPokemonList}
            style={{ textDecoration: 'none', color: '#fff' }}
            css={pathname === path.myPokemonList
              ? ButtonContainerActive
              : ButtonContainer}
          >
            <div style={myPokemons.length === 0 ? { display: 'none' } : { backgroundColor: '#b6302f', position: 'absolute', right: 16, top: 10, paddingLeft: 6, paddingRight: 6, borderRadius: '1.25em', border: '2px solid white' }}>
              <p style={{ margin: 0, fontSize: '.8rem', fontWeight: 600, color: 'white' }}>{myPokemons?.length}</p>
            </div>
            <CgHeart size="2em" css={pathname === path.myPokemonList ? ButtonIconActive : ButtonIcon} />
          </Link>
        </div>
        {/** icons/ */}

      </div>
    </div>
  );
};

export default Bottombar;
