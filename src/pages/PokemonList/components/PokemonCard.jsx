/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const PokemonCard = ({ props }) => {

  const PokemonCardContainer = css`
    -webkit-tap-highlight-color: transparent;
    color: #fff; background-color: #00d2d3;
    width: 100%;
    height: auto;
    border-radius: 1.25rem;
    display: flex;
    cursor: pointer;
    transition: 300ms;
    box-shadow: 0 .08rem .16rem rgba(0,0,0,.15);
    display: flex;
    flex-direction: column;
    &:hover {
      filter: brightness(75%);
      transition: 300ms;
    }
    &:active {
      filter: brightness(55%);
      transition: 300ms;
    }
  `;

  const handleClick = _ => {
    return console.log('clicked');
  };

  return (
    <div id="PokemonCard" css={PokemonCardContainer}>
      <h3 style={{ margin: 12, textOverflow: 'ellipsis', overflow: 'hidden' }}>Bulbasauraaaa</h3>
      <div className="row" style={{ marginLeft: 12, marginRight: 12, paddingBottom: 12 }}>
        <div className="col-6" style={{ padding: 0 }}>
          <div style={{ margin: 4, backgroundColor: '#fafafa6a', color: 'white', borderRadius: 8, textAlign: 'center' }}>
            <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em' }}>Grass</p>
          </div>
          <div style={{ margin: 4, backgroundColor: '#fafafa6a', color: 'white', borderRadius: 8, textAlign: 'center' }}>
            <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em' }}>Poison</p>
          </div>
        </div>
        <div className="col-6" style={{ padding: 0 }}>
          <img style={{ width: '100%' }} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
        </div>
      </div>
    </div>
  );
};
