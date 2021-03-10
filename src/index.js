/** @jsxImportSource @emotion/react */
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { client } from './utils/graphql/graphql';
import reportWebVitals from './reportWebVitals';

const Body = css`
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
      <ApolloProvider client={client} >
        <Global styles={Body} />
        <Global styles={CodeStyle} />
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
