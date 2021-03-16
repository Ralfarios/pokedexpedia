/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CgPokemon, CgHeart } from 'react-icons/cg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { path } from '../../../routers/path';
import { getMyPokemons } from '../../../utils/store/actions/myPokemonAction';

const PokemonDetailHeader = ({ props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { myPokemons } = useSelector(state => state.myPokemon)

  const handleCol = _ => {
    if (props?.types === undefined) return 'color: #fff;';
    switch (props?.types[0]?.type?.name) {
      case 'normal':
        return 'color: #fff;';
      case 'fighting':
        return 'color: #fff;';
      case 'flying':
        return 'color: #fff;';
      case 'poison':
        return 'color: #fff;';
      case 'ground':
        return 'color: #fff;';
      case 'rock':
        return 'color: #fff;';
      case 'bug':
        return 'color: #fff;';
      case 'ghost':
        return 'color: #2a2a2a;';
      case 'steel':
        return 'color: #fff;';
      case 'fire':
        return 'color: #fff;';
      case 'water':
        return 'color: #fff;';
      case 'grass':
        return 'color: #fff;';
      case 'electric':
        return 'color: #2a2a2a;';
      case 'psychic':
        return 'color: #2a2a2a;';
      case 'ice':
        return 'color: #fff;';
      case 'dragon':
        return 'color: #fff;';
      case 'dark':
        return 'color: #fff;';
      case 'fairy':
        return 'color: #fff;';
      case 'unknown':
        return 'color: #fff;';
      case 'shadow':
        return 'color: #fff;';
      default:
        return 'color: #fff;';
    };
  };

  const PokemonDetailHeaderStyle = css`
    padding: 24px;
    ${handleCol()}
  `;

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

  useEffect(() => {
    dispatch(getMyPokemons());
  }, [dispatch]);

  const handleOwned = _ => {
    if (!myPokemons) return [];
    return myPokemons?.filter(e => e.name === props?.name)
  }

  return (
    <div id="PokemonDetailHeader" css={PokemonDetailHeaderStyle}>
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
          <p style={{ margin: 8, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '.75em', textTransform: 'capitalize' }}>Own: {handleOwned()?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailHeader;
