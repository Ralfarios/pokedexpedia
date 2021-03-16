import React from 'react';

const PokemonStat = ({ props }) => {
  return (
    <div id="PokemonStat" style={{ height: '55%', padding: 12, overflowX: 'auto' }}>
      {props?.stats?.map((e, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
            <p style={{ margin: 0, fontSize: '1em', fontWeight: 600 }}>{e?.stat?.name}</p>
            <p style={{ margin: 0, fontSize: '1em' }}>{e?.base_stat}</p>
          </div>
          <hr style={{ marginTop: '.5rem', marginBottom: '.5rem' }} />
        </div>))}
    </div >
  );
};

export default PokemonStat;
