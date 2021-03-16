import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkelPokemonCard = _ => {
  return (
    <Skeleton height={'25vh'} width={'100%'} style={{ borderRadius: 12, display: 'flex', flexDirection: 'column' }} />
  );
};

export default SkelPokemonCard;
