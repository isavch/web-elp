import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '../shared/main';

ReactDOM.hydrate(
    <App />,
    document.getElementById("app")
);