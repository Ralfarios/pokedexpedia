/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { CgArrowLeft } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


import logo from '../../assets/images/img_logoPokeball.svg';
import { path } from '../../routers/path';

export const Navbar = _ => {
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

  const BackButtonContainer = css`
    -webkit-tap-highlight-color: transparent;
    height: 36px;
    width: 36px;
    border-radius: 1.5rem;
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
  // console.log(pathname.split('/')[1])



  useEffect(() => {
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
  }, []);

  return (
    <div
      id="Navbar"
      css={NavBar}
      style={pathname === path.notFound
        ? { display: 'none' }
        : { display: 'block' }}
    >
      <div css={bgNavbar}>
        <div style={pathname === path.pokemonList || pathname === path.myPokemonList || pathname === path.notFound || headEP === 'page'
          ? { display: 'flex', }
          : { display: 'none' }}
        >
          <img src={logo} style={{ width: 36 }} alt="logo" />
          <h2 style={{ padding: 0, margin: 0, marginLeft: 16, alignSelf: 'center', userSelect: 'none' }}>Pokédexpedia</h2>
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
