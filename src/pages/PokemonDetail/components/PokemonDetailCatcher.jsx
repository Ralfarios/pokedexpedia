import React from 'react';
import Swal from 'sweetalert2';

export const PokemonDetailCatcher = ({ props }) => {
  const handleCatch = _ => {
    const gacha = Math.random().toFixed(2);
    Swal.fire({
      title: 'Catching...',
      timer: (1000 - (gacha * 1000)) * 2,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    }).then((result) => {
      if (gacha <= 0.50) return console.log('YOU FAILED!', gacha)
      return console.log(props, gacha);
    })

  };

  return (
    <div id="PokemonDetailCatcher">
      <div
        style={{ position: 'fixed', left: 0, bottom: 0, width: '100vw', padding: '0 24px 24px 24px' }}
        onClick={() => handleCatch()}
      >
        <button className="btn btn-primary w-100" style={{ borderRadius: '0.9rem' }}>Catch this!</button>
      </div>
    </div>
  );
};
