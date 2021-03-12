/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory } from 'react-router';

import illustration from '../../assets/images/img_404snorlax.svg';
import { path } from '../../routers/path';
import { MetaDecorator } from '../../utils/helmet/MetaDecorator';
import { Button } from '../../components/helpers/Button'

export const NotFound = _ => {
  const history = useHistory();

  const illustrationStyle = css`
    @media screen and (min-width: 720px) {
      width: 30vw;
    }
    @media screen and (max-width: 720px) {
      width: 46vw;
    }
    @media screen and (max-width: 480px) {
      width: 72vw;
    }
  `;

  const handleBackHome = _ => history.push(path.pokemonList);

  return (
    <div id="NotFound" css={css`display: flex; justify-content: center; height:100vh; margin-left: 16px; margin-right: 16px`}>
      <MetaDecorator title="Pokédex | 404 Not Found" desc="If you see this page, that means the url is wrong." />

      <div css={css`align-self: center; text-align: center;`}>
        <img src={illustration} alt="snorlax404" css={illustrationStyle} />
        <h1 style={{ textAlign: 'center', marginBottom: 8, color: '#275d5f' }}>Whoopsy!</h1>
        <p style={{ textAlign: 'center', marginTop: 0 }}>
          The path that wild <b style={{ color: '#275d5f' }}>Snorlax</b> block might be lead to nowhere!
        </p>
        <Button status="404" as="button" onClick={handleBackHome}>Back Home</Button>
      </div>
    </div>
  );
};
