/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../routers/path';
import { CgPokemon, CgHeart } from 'react-icons/cg';

export const Bottombar = _ => {
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
      box-shadow: 0 .05rem .1rem rgba(0,0,0,.15);
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

  const { pathname } = useLocation();

  return (
    <div id="Bottombar" css={BottomBar} style={pathname === path.notFound ? { display: 'none' } : { display: 'flex', justifyContent: 'center' }}>
      <div css={BottomBarContainer}>

        <div style={{ display: 'flex', padding: 8 }}>
          <Link to={path.pokemonList} style={{ textDecoration: 'none', color: '#fff' }} css={pathname === path.pokemonList ? ButtonContainerActive : ButtonContainer}>
            <CgPokemon size="2em" css={pathname === path.pokemonList ? ButtonIconActive : ButtonIcon } />
          </Link>
          <Link to={path.myPokemonList} style={{ textDecoration: 'none', color: '#fff' }} css={pathname === path.myPokemonList ? ButtonContainerActive : ButtonContainer}>
            <CgHeart size="2em" css={pathname === path.myPokemonList ? ButtonIconActive : ButtonIcon } />
          </Link>
        </div>

      </div>
    </div>
  );
};
