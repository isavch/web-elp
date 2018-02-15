import * as React from 'react';
import { StaticRouter } from 'react-router';
import App from '../shared/main';
import { Request } from "express";

interface PageProps {
    req: Request
};

export const Page = ({ req }: PageProps) => {
    const context = {};

    return (
        <html>
        <head>
            <title>Hello React!</title>
        </head>
        <body>
            <div id='app'>
                <StaticRouter context={context} location={req.url}>
                    <App />
                </StaticRouter>
            </div>
            <script src='main.js'></script>
        </body>
        </html>
    );
};