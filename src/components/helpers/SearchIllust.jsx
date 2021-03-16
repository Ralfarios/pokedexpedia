import React from 'react';
import LoadingAnimSpec from './LoadingAnimSpec';

const SearchIllust = ({ props }) => {
  return (
    <div id="SearchIllust" style={{ display: 'flex', justifyContent: 'center', height: 'calc(100% - 120px)' }}>
      <div style={{ alignSelf: 'center' }}>
        {props === 'notFound'
          ? <h1>Not Founda</h1>
          : props === 'loading'
            ? <LoadingAnimSpec />
            : <h1>Insert Keyworda</h1>}
      </div>
    </div>
  );
};

export default SearchIllust;
