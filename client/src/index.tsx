import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/600.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';

import GlobalStyles from './styles/global.styles';
import Typography from './styles/typography.styles';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
    <ToastContainer role="alert" />
  </React.StrictMode>,
  document.getElementById('root')
);
