import React from 'react';

import PokeBall from '../../assets/images/img_logoPokeball.svg';
import Snorlax from '../../assets/images/img_404snorlax.svg';
import LoadingAnimSpec from './LoadingAnimSpec';

const SearchIllust = ({ props }) => {
  return (
    <div id="SearchIllust" style={{ display: 'flex', justifyContent: 'center', height: 'calc(100% - 120px)' }}>
      <div style={{ alignSelf: 'center' }}>
        {props === 'notFound'
          ? <div style={{ textAlign: 'center' }}>
            <img src={Snorlax} alt="PokeKeyword" style={{ height: '20vh' }} />
            <p style={{ marginTop: 25 }}>
              Pokémon <b style={{ color: '#275d5f' }}>Not Found</b>
          </p>
          </div>
          : props === 'loading'
            ? <LoadingAnimSpec />
            : <div style={{ textAlign: 'center' }}>
              <img src={PokeBall} alt="PokeKeyword" style={{ height: '16vh' }} />
              <p style={{ marginTop: 25 }}>
                Insert keyword, min <b style={{ color: '#b6302f' }}>4</b> characters!
              </p>
            </div>}
      </div>
    </div>
  );
};

export default SearchIllust;
