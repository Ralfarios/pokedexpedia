import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const SkelPokemonCard = _ => {
  return (
    <div id="SkelPokemonCard">
      <SkeletonTheme color="#dedede" highlightColor="#eee">
        <Skeleton height={'25vh'} width={'100%'} style={{ borderRadius: 12, display: 'flex', flexDirection: 'column' }} />
      </SkeletonTheme>
    </div>
  );
};
