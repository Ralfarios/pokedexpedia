/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react';
import { CgArrowLeft, CgPokemon, CgHeart } from 'react-icons/cg';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/images/img_logoPokeball.svg';
import { path } from '../../routers/path';
import { getMyPokemons } from '../../utils/store/actions/myPokemonAction';

const Navbar = _ => {
  const dispatch = useDispatch();
  const { myPokemons } = useSelector(state => state.myPokemon);

  const NavBar = css`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;
  `;

  const NavBarContainer = css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 72px;
    padding: 0px 24px;
    box-shadow: 0 .08rem .16rem rgba(0,0,0,.15);
    border-radius: 0 0 1.25rem 1.25rem;
    transition: .15s ease-in-out;
  `;

  const NavBarContainerTransparent = css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    height: 72px;
    padding: 0px 24px;
    box-shadow: 0;
    transition: .15s ease-in-out;
  `;

  const NavBarButtonContainer = css`
    @media only screen and (max-width: 575px) {
      display: none;
    }
    @media only screen and (min-width: 575px) {
      display: flex;
    }
  `;

  const BackButtonContainer = css`
    -webkit-tap-highlight-color: transparent;
    height: 36px;
    width: 36px;
    border-radius: 1.5rem;
    text-align: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      background-color: #e0e0e0;
    }
    &:active {
      background-color: #cecece;
      transition: 300ms;
    }
  `;

  const history = useHistory();
  const { pathname } = useLocation();
  const [bgNavbar, setBgNavbar] = useState(NavBarContainerTransparent);
  const headEP = pathname.split('/')[1]

  useEffect(() => {
    dispatch(getMyPokemons());
    window.addEventListener('scroll', () => {
      if (window.scrollY < 10) {
        setBgNavbar(NavBarContainerTransparent);
      } else {
        setBgNavbar(NavBarContainer);
      }
    });
    window.removeEventListener('scroll', () => {
      if (window.scrollY < 10) {
        setBgNavbar(NavBarContainerTransparent);
      } else {
        setBgNavbar(NavBarContainer);
      }
    });   // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div
      id="Navbar"
      css={NavBar}
      style={pathname === path.notFound || headEP === 'pokemon'
        ? { display: 'none' }
        : { display: 'block' }}
    >
      <div css={bgNavbar}>
        <div
          style={pathname === path.pokemonList || pathname === path.myPokemonList || pathname === path.notFound || headEP === 'page'
            ? { display: 'flex', justifyContent: 'space-between', width: '100%' }
            : { display: 'none' }}
        >
          <div style={{ display: 'flex' }}>
            <img src={logo} style={{ width: 36, height: 36 }} alt="logo" />
            <h2 style={{ padding: 0, margin: 0, marginLeft: 16, alignSelf: 'center', userSelect: 'none' }}>Pokédexpedia</h2>
          </div>

          <div css={NavBarButtonContainer}>
            <div
              css={BackButtonContainer}
              onClick={() => { history.push(path.pokemonList) }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CgPokemon size="30px" style={{ alignSelf: 'center' }} />
            </div>
            <div
              css={BackButtonContainer}
              onClick={() => { history.push(path.myPokemonList) }}
              style={{ display: 'flex', justifyContent: 'center', marginLeft: '16px' }}
            >
              <div style={myPokemons.length === 0 ? { display: 'none' } : { backgroundColor: '#b6302f', position: 'absolute', right: 20, paddingLeft: 6, paddingRight: 6, borderRadius: '1.25em' }}>
                <p style={{ margin: 0, fontSize: '.8rem', fontWeight: 600, color: 'white' }}>{myPokemons?.length}</p>
              </div>
              <CgHeart size="30px" style={{ alignSelf: 'center' }} />
            </div>
          </div>
        </div>
        <div
          css={BackButtonContainer}
          style={pathname === path.pokemonList || pathname === path.myPokemonList || pathname === path.notFound || headEP === 'page'
            ? { display: 'none' }
            : { display: 'flex' }}
          onClick={() => { history.goBack() }}
        >
          <CgArrowLeft size="30px" style={{ alignSelf: 'center', textAlign: 'center' }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
