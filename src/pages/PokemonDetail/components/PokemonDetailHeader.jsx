/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CgPokemon, CgHeart } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import { path } from '../../../routers/path';

export const PokemonDetailHeader = ({ props }) => {
  const history = useHistory();

  const NavButtonContainer = css`
    -webkit-tap-highlight-color: transparent;
    height: 42px;
    width: 42px;
    border-radius: 1.5rem;
    justify-content: center;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      background-color: #e0e0e06a;
    }
    &:active {
      background-color: #cecece6a;
      transition: 300ms;
    }
  `;

  return (
    <div id="PokemonDetailHeader" style={{ padding: 24, color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <div css={NavButtonContainer} onClick={() => history.push(path.pokemonList)}>
          <CgPokemon size="2em" style={{ alignSelf: 'center' }} />
        </div>
        <div css={NavButtonContainer} onClick={() => history.push(path.myPokemonList)}>
          <CgHeart size="1.8em" style={{ alignSelf: 'center' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <h1 style={{ textTransform: 'capitalize', margin: 0, alignSelf: 'center' }}>{props?.name}</h1>
        <h5 style={{ fontWeight: 400, margin: 0, alignSelf: 'center' }}>#{props?.id}</h5>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex' }}>
          {props?.types?.map((e, i) => (
            <div key={i} style={{ margin: 4, backgroundColor: '#3a3a3abf', color: 'white', borderRadius: 8, textAlign: 'center' }}>
              <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em', textTransform: 'capitalize' }}>{e.type.name}</p>
            </div>
          ))}
        </div>
        <div style={{ margin: 4, backgroundColor: '#ffffffbf', color: 'black', borderRadius: 8, textAlign: 'center' }}>
          <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em', textTransform: 'capitalize' }}>Own: 0</p>
        </div>
      </div>
    </div>
  );
};
