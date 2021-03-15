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
    }).then(_ => {
      if (gacha <= 0.50) return (
        Swal.fire({
          icon: 'error',
          title: 'Oh no ...',
          text: `This wild ${props?.name.charAt(0).toUpperCase()}${props?.name.slice(1)} got away!`,
        })
      );

      return (
        Swal.fire({
          title: 'Pokémon catched!',
          text: 'What should we name this Pokémon?',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Look up',
          showLoaderOnConfirm: true,
          preConfirm: (name) => {
            console.log(name)
          },
          allowOutsideClick: false
        }).then(result => {
          if (result.isConfirmed) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
            });

            Toast.fire({
              icon: 'success',
              title: 'Added to your Pokédex.'
            });
          };

          if (result.isDismissed) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
            });

            Toast.fire({
              icon: 'error',
              title: 'Pokémon got away.'
            });
          };
        })
      );
    });
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
