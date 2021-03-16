/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PokemonAbilities = ({ props }) => {

  const PokemonAbilitiesCardContainer = css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  `;

  const PokemonAbilitiesCard = css`
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
    <div id="PokemonAbilities" style={{ height: '55%', padding: 12, overflowX: 'auto' }} css={PokemonAbilitiesCardContainer}>
      {props?.abilities?.map((e, i) => (
        <div css={PokemonAbilitiesCard} key={i} >
          <p style={{ margin: 0, alignSelf: 'center' }}>{e?.ability?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonAbilities;
