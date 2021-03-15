import React from 'react';

export const PokemonDetailImage = ({ props }) => {
  return (
    <div id="PokemonDetailImage">
      <img
        alt={props?.name}
        style={{ position: 'fixed', left: '50%', top: '40%', transform: 'translate(-50%, -55%)', zIndex: 2, height: '35%' }}
        src={!props?.sprites?.other['official-artwork']?.front_default
          ? props?.sprites?.front_default
          : props?.sprites?.other['official-artwork']?.front_default}
      />
    </div>
  );
};
