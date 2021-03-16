import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../assets/json/json_pokeballG.json';

const LoadingAnimSpec = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Lottie options={defaultOptions} width={128} height={128} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
    </div>
  )
};

export default LoadingAnimSpec;
