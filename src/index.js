import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { ThemeProvider } from './context/themeContext';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,

  document.getElementById('root'));
