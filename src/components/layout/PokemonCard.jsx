/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMyPokemons } from '../../utils/store/actions/myPokemonAction';

export const PokemonCard = ({ props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { myPokemons } = useSelector(state => state.myPokemon);

  const handleCol = _ => {
    if (props?.types === undefined) return 'color: #fff; background-color: #00d2d3;';
    switch (props?.types[0]?.type?.name) {
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

  const PokemonCardContainer = css`
    -webkit-tap-highlight-color: transparent;
    ${handleCol()}
    width: 100%;
    height: auto;
    border-radius: 1.25rem;
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

  useEffect(() => {
    dispatch(getMyPokemons());
  }, [dispatch]);

  const handleOwned = _ => {
    if (!myPokemons) return [];
    return myPokemons?.filter(e => e.name === props?.name);
  };

  const handleClick = id => {
    return history.push(`/pokemon/${id}/info`);
  };

  return (
    <div id="PokemonCard" css={PokemonCardContainer} onClick={_ => handleClick(props?.id)}>
      <h3 style={{ margin: 12, marginBottom: 4, textOverflow: 'ellipsis', overflow: 'hidden', textTransform: 'capitalize' }}>{props?.name}</h3>
      <div className="row" style={{ marginLeft: 12, marginRight: 12, paddingBottom: 12 }}>
        <div className="col-6" style={{ padding: 0, alignSelf: 'center' }}>
          <div style={{ margin: 4, backgroundColor: '#ffffffbf', color: 'black', borderRadius: 8, textAlign: 'center' }}>
            <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em', textTransform: 'capitalize' }}>Own: {handleOwned()?.length}</p>
          </div>
          {props?.types?.map((e, i) => (
            <div key={i} style={{ margin: 4, backgroundColor: '#3a3a3abf', color: 'white', borderRadius: 8, textAlign: 'center' }}>
              <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em', textTransform: 'capitalize' }}>{e.type.name}</p>
            </div>
          ))}
        </div>
        <div className="col-6" style={{ padding: 0, textAlign: 'center', alignSelf: 'center' }}>
          <img
            alt={props?.name}
            style={{ width: '75%', height: 'auto', zIndex: 1500 }}
            src={!props?.sprites?.other['official-artwork']?.front_default
              ? props?.sprites?.front_default
              : props?.sprites?.other['official-artwork']?.front_default}
          />
        </div>
      </div>
    </div>
  );
};
