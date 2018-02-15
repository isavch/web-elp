import * as React from 'react';
import App from '../shared/main';

export const Page = () => {
    return (
        <html>
        <head>
            <title>Hello React!</title>
        </head>
        <body>
            <div id='app'>
                <App />
            </div>
            <script src='main.js'></script>
        </body>
        </html>
    );
};