import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//chakra-ui
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './chakra';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
