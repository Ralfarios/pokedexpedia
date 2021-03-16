import React from 'react';

const PokemonInfo = ({ props }) => {
  return (
    <div id="PokemonInfo" style={{ height: '55%', padding: 12, overflowX: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
        <p style={{ margin: 0, fontSize: '1em', fontWeight: 600 }}>Height</p>
        <p style={{ margin: 0, fontSize: '1em' }}>{props?.height / 10} m</p>
      </div>
      <hr style={{ marginTop: '.5rem', marginBottom: '.5rem' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
        <p style={{ margin: 0, fontSize: '1em', fontWeight: 600 }}>Weight</p>
        <p style={{ margin: 0, fontSize: '1em' }}>{props?.weight / 10} kg</p>
      </div>
      <hr style={{ marginTop: '.5rem', marginBottom: '.5rem' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
        <p style={{ margin: 0, fontSize: '1em', fontWeight: 600 }}>Base EXP</p>
        <p style={{ margin: 0, fontSize: '1em' }}>{props?.base_experience}</p>
      </div>
    </div >
  );
};

export default PokemonInfo;
