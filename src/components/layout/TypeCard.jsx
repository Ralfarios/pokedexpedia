/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';

import watermark from '../../assets/images/img_pokeballWhite.svg';
import { path } from '../../routers/path';

const TypeCard = ({ props }) => {
  const history = useHistory();

  const handleCol = _ => {
    if (props === undefined) return 'color: #fff; background-color: #00d2d3;';
    switch (props?.name) {
      case 'normal':
        return 'color: #fff; background-color: #00d2d3;';
      case 'fighting':
        return 'color: #fff; background-color: #ff9f43;';
      case 'flying':
        return 'color: #fff; background-color: #48dbfb;';
      case 'poison':
        return 'color: #fff; background-color: #341f97;';
      case 'ground':
        return 'color: #fff; background-color: #875c36;';
      case 'rock':
        return 'color: #fff; background-color: #222f3e;';
      case 'bug':
        return 'color: #fff; background-color: #10ac84;';
      case 'ghost':
        return 'color: #2a2a2a; background-color: #c8d6e5;';
      case 'steel':
        return 'color: #fff; background-color: #576574;';
      case 'fire':
        return 'color: #fff; background-color: #ee5253;';
      case 'water':
        return 'color: #fff; background-color: #2e86de;';
      case 'grass':
        return 'color: #fff; background-color: #1dd1a1;';
      case 'electric':
        return 'color: #2a2a2a; background-color: #feca57;';
      case 'psychic':
        return 'color: #2a2a2a; background-color: #ff9ff3;';
      case 'ice':
        return 'color: #fff; background-color: #0abde3;';
      case 'dragon':
        return 'color: #fff; background-color: #ff6b6b;';
      case 'dark':
        return 'color: #fff; background-color: #2C3A47;';
      case 'fairy':
        return 'color: #fff; background-color: #B33771;';
      case 'unknown':
        return 'color: #fff; background-color: #182C61;';
      case 'shadow':
        return 'color: #fff; background-color: #4b4b4b;';
      default:
        return 'color: #fff; background-color: #4b4b4b;';
    };
  };

  const TypeCardContainer = css`
    -webkit-tap-highlight-color: transparent;
    ${handleCol()}
    width: 250px;
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
    if (props.url === '/') return history.push(path.pokemonList);

    return history.push('/type/' + props.name);
  };

  return (
    <div id="TypeCard" css={TypeCardContainer} onClick={() => handleClick()}>
      <p style={{ userSelect: 'none', fontWeight: 600, margin: '24px 12px 24px 24px', fontSize: 20, alignSelf: 'center', textTransform: 'capitalize' }}>{props?.name}</p>
      <img id="watermarkImage" src={watermark} alt="watermark" style={{ pointerEvents: 'none', userSelect: 'none', alignSelf: 'center', height: 56, width: 56, float: 'right', marginRight: 12, opacity: 0.25 }} />
    </div>
  );
};

export default TypeCard;
