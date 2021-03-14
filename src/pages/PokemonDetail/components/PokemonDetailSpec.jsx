/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory, useLocation } from 'react-router-dom';

export const PokemonDetailSpec = ({ props }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const indicator = pathname.split('/')[3];

  const PokemonDetailSpecCont = css`
    background-color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 50vh;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    padding: 60px 24px 12px 24px;
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, .25);
  `;

  const NavLink = css`
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `;

  const NavLinkActive = css`
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  `;

  return (
    <div css={PokemonDetailSpecCont}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={indicator === 'info' ? 'nav-link active' : 'nav-link'} style={indicator === 'info' ? { outline: 'none' } : { outline: 'none', color: '#0d6efd' }} onClick={() => history.push(`/pokemon/${props?.id}/info`)}>Info</button>
        </li>
        <li className="nav-item">
          <button className={indicator === 'move' ? 'nav-link active' : 'nav-link'} style={indicator === 'move' ? { outline: 'none' } : { outline: 'none', color: '#0d6efd' }} onClick={() => history.push(`/pokemon/${props?.id}/move`)}>Move</button>
        </li>
      </ul>
    </div>
  );
};
