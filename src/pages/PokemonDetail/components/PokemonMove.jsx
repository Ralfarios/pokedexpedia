/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const PokemonMove = ({ props }) => {

  const PokemonMoveCardContainer = css`
    @media only screen and (min-height: 568px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
      height: 55%;
      padding: 12px;
      overflow-x: auto; 
    }
    @media only screen and (max-height: 568px) {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
      height: 32%;
      padding: 12px;
      overflow-x: auto; 
    }
  `;

  const PokemonMoveCard = css`
    -webkit-tap-highlight-color: transparent;
    color: #fff; 
    background-color: #4b4b4b;
    text-align: center;
    width: 100%;
    height: 24px;
    border-radius: 1.25rem;
    cursor: pointer;
    transition: 300ms;
    box-shadow: 0 .08rem .16rem rgba(0,0,0,.15);
    display: flex;
    justify-content: center;
    flex-direction: column;
    &:hover {
      filter: brightness(75%);
      transition: 300ms;
    }
  `;

  return (
    <div id="PokemonMove" css={PokemonMoveCardContainer}>
      {props?.moves?.map((e, i) => (
        <div css={PokemonMoveCard} key={i} >
          <p style={{ margin: 0, alignSelf: 'center' }}>{e?.move?.name}</p>
        </div>
      ))}
    </div>
  );
};
