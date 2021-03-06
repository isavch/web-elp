import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../shared/main';

ReactDOM.hydrate(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);
