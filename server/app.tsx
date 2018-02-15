import * as React from 'react';
import * as express from 'express'
import { renderToNodeStream } from 'react-dom/server';
import { Page } from './page';
import { Request, Response } from "express";
import { Stream } from 'stream'

const port = process.env.PORT || 8000;
const app = express();
const server = app.listen(port, () => console.log('Listening on port %d', server.address().port));

app.use(express.static('./lib/public'));

app.get('*', (req: Request, res: Response) : Stream  =>
    renderToNodeStream(<Page req={req}/>).pipe(res)
);
