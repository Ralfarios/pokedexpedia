/** @jsxImportSource @emotion/react */
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './utils/store/index';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

  html {
    background-color: #f0f2f5;
  }

  body{
    margin: 0;
    font-family: Rubik, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f0f2f5;
  }
`;

const CodeStyle = css`  
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<h1>Loading...</h1>} >
          <Global styles={Body} />
          <Global styles={CodeStyle} />
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
