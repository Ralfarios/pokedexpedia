import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { catchPokemon, getMyPokemons } from '../../../utils/store/actions/myPokemonAction';

export const PokemonDetailCatcher = ({ props }) => {
  let newName;

  const { myPokemons } = useSelector(state => state.myPokemon);
  const dispatch = useDispatch();

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
          confirmButtonText: 'Submit',
          showLoaderOnConfirm: true,
          preConfirm: (name) => {
            newName = name;
          },
          allowOutsideClick: false
        }).then(result => {
          if (result.isConfirmed) {

            const dateString = new Date().toISOString();

            const dateFront = dateString.split("T")[0].split("-").join("");
            const dateBack = parseFloat(dateString.split("T")[1].split(":")[2])
              .toFixed(2)
              .split(".")
              .join("");

            const dateBackDone = dateBack.length < 4 ? `0${dateBack}` : `${dateBack}`;

            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
            });
            const input = {
              id: props?.id,
              UID: dateFront + dateBackDone,
              newName,
              name: props?.name,
              illust: props?.sprites?.other['official-artwork']?.front_default,
              sprite: props?.sprites?.front_default,
              types: props?.types
            };

            for (let i = 0; i < myPokemons?.length; i++) {
              if (myPokemons[i]?.newName === newName) return Toast.fire({
                icon: 'error',
                title: 'Pokémon name is already exist!'
              });
            };

            dispatch(catchPokemon(input));

            return Toast.fire({
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

  useEffect(() => {
    dispatch(getMyPokemons());
  }, [dispatch]);

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
