/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import logo from './assets/images/logo.svg';

export const App = _ => {
  const AppS = css`
    text-align: center;
  `;
  const AppLogos = css`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {    
      animation: App-logo-spin infinite 20s linear;
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  const AppHeaders = css`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const AppLink = css`
    color: #61dafb;
  `;

  return (
    <div css={AppS}>
      <header css={AppHeaders}>
        <img src={logo} css={AppLogos} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
