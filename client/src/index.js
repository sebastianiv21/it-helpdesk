import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// eslint-disable-next-line
import bootstrap from 'bootstrap';
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);

