/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CgPokemon, CgHeart } from 'react-icons/cg';

import { fetchPokemonById } from '../../utils/store/actions/pokemonAction';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { Button } from '../../components/helpers/Button';
import { path } from '../../routers/path';

export const PokemonDetail = _ => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pokemonid } = useParams();
  const { pokemon, errors, isLoading } = useSelector(state => state.pokemon);
  let metaTitle;

  useEffect(() => {
    metaTitle = '';
    dispatch(fetchPokemonById(pokemonid));
  }, [dispatch, pokemonid]);

  const handleCol = _ => {
    if (pokemon?.types === undefined) return 'color: #fff; background-color: #00d2d3;';
    switch (pokemon?.types[0]?.type?.name) {
      case 'normal':
        return 'background-color: #00d2d3;';
      case 'fighting':
        return 'background-color: #ff9f43;';
      case 'flying':
        return 'background-color: #48dbfb;';
      case 'poison':
        return 'background-color: #341f97;';
      case 'ground':
        return 'background-color: #875c36;';
      case 'rock':
        return 'background-color: #222f3e;';
      case 'bug':
        return 'background-color: #10ac84;';
      case 'ghost':
        return 'background-color: #c8d6e5;';
      case 'steel':
        return 'background-color: #576574;';
      case 'fire':
        return 'background-color: #ee5253;';
      case 'water':
        return 'background-color: #2e86de;';
      case 'grass':
        return 'background-color: #1dd1a1;';
      case 'electric':
        return 'background-color: #feca57;';
      case 'psychic':
        return 'background-color: #ff9ff3;';
      case 'ice':
        return 'background-color: #0abde3;';
      case 'dragon':
        return 'background-color: #ff6b6b;';
      case 'dark':
        return 'background-color: #2C3A47;';
      case 'fairy':
        return 'background-color: #B33771;';
      case 'unknown':
        return 'background-color: #182C61;';
      case 'shadow':
        return 'background-color: #4b4b4b;';
      default:
        return 'background-color: #4b4b4b;';
    };
  };

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


  const PokemonDetailPage = css`
    @media only screen and (max-width: 575px) {
      display: 'flex';
      ${handleCol()}
      height: 100vh;
      padding-bottom: 72px;
    }
    @media only screen and (min-width: 575px) {
      ${handleCol()}
      height: 100vh;
      padding-bottom: 12px;
    }
  `;

  if (isLoading) return (
    <>
      <MetaDecorator title="Pokédexpedia" desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />
      <h1>Loading ...</h1>
    </>
  )
  if (errors) return (
    <>
      <MetaDecorator title="Pokédexpedia" desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />
      <h1>ERROR</h1>
    </>
  )

  metaTitle = `Pokédexpedia | ${pokemon?.name}`;

  console.log(pokemon);

  return (
    <div id="PokemonDetail" css={PokemonDetailPage}>
      <MetaDecorator title={metaTitle} desc="This is Pokemon Detail page, you can see the detail about a pokemon in here." />

      <div style={{ padding: 24, color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
          <div css={NavButtonContainer} onClick={() => history.push(path.pokemonList)}>
            <CgPokemon size="2em" style={{ alignSelf: 'center' }} />
          </div>
          <div css={NavButtonContainer} onClick={() => history.push(path.myPokemonList)}>
            <CgHeart size="1.8em" style={{ alignSelf: 'center' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <h1 style={{ textTransform: 'capitalize', margin: 0, alignSelf: 'center' }}>{pokemon?.name}</h1>
          <h5 style={{ fontWeight: 400, margin: 0, alignSelf: 'center' }}>#{pokemon?.id}</h5>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex' }}>
            {pokemon?.types?.map((e, i) => (
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

      <img
        alt={pokemon?.name}
        style={{ position: 'fixed', left: '50%', top: '43%', transform: 'translate(-50%, -55%)', zIndex: 1500, height: '35%' }}
        src={!pokemon?.sprites?.other['official-artwork']?.front_default
          ? pokemon?.sprites?.front_default
          : pokemon?.sprites?.other['official-artwork']?.front_default}
      />

      <div style={{ backgroundColor: 'white', position: 'fixed', left: 0, bottom: 0, width: '100vw', height: '50vh', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', padding: '60px 24px 12px 24px', boxShadow: ' 0 .1rem 1rem rgba(0,0,0,.25)' }}>
        <h1>1</h1>
      </div>

      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100vw', padding: '0 24px 24px 24px' }}>
        <button className="btn btn-primary w-100" style={{ borderRadius: '0.9rem' }}>Catch this!</button>
      </div>

    </div >

  );
};
