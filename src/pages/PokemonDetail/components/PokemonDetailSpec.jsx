/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory, useLocation } from 'react-router-dom';

import { PokemonInfo } from './PokemonInfo';
import { PokemonMove } from './PokemonMove';
import { PokemonStat } from './PokemonStat';

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

  return (
    <div css={PokemonDetailSpecCont}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={indicator === 'info'
              ? 'nav-link active'
              : 'nav-link'}
            style={indicator === 'info'
              ? { outline: 'none' }
              : { outline: 'none', color: '#0d6efd' }}
            onClick={() => history.push(`/pokemon/${props?.id}/info`)}
          >
            Info
          </button>
        </li>
        <li className="nav-item">
          <button
            className={indicator === 'stat'
              ? 'nav-link active'
              : 'nav-link'}
            style={indicator === 'stat'
              ? { outline: 'none' }
              : { outline: 'none', color: '#0d6efd' }}
            onClick={() => history.push(`/pokemon/${props?.id}/stat`)}
          >
            Stat
          </button>
        </li>
        <li className="nav-item">
          <button
            className={indicator === 'move'
              ? 'nav-link active'
              : 'nav-link'}
            style={indicator === 'move'
              ? { outline: 'none' }
              : { outline: 'none', color: '#0d6efd' }}
            onClick={() => history.push(`/pokemon/${props?.id}/move`)}
          >
            Move
          </button>
        </li>
      </ul>

      {indicator === 'move'
        ? <PokemonMove props={props} />
        : indicator === 'stat'
          ? <PokemonStat props={props} />
          : <PokemonInfo props={props} />}
    </div>
  );
};
