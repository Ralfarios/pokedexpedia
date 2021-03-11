/** @jsxImportSource @emotion/react */
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './utils/store/index';

const Body = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

  body{
    margin: 0;
    font-family: Rubik, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const CodeStyle = css`  
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Global styles={Body} />
          <Global styles={CodeStyle} />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
