/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const PokemonCard = ({props}) => {

  const PokemonCardContainer = css`
    -webkit-tap-highlight-color: transparent;
    color: #fff; background-color: #00d2d3;
    width: 100%;
    height: 125px;
    border-radius: 1.25rem;
    display: flex;
    cursor: pointer;
    transition: 300ms;
    box-shadow: 0 .08rem .16rem rgba(0,0,0,.15);
    margin-top: 12px;
    margin-bottom: 12px;
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

  return(
    <div id="PokemonCard" css={PokemonCardContainer}>
      <h3>test</h3>
    </div>
  );
};
