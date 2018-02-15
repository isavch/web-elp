import * as React from 'react';
import * as express from 'express'
import { renderToNodeStream } from 'react-dom/server';
import { Page } from './page';

const port = process.env.PORT || 8000;
const app = express();
const server = app.listen(port, () => console.log('Listening on port %d', server.address().port));

app.use(express.static('./lib/public'));
app.get('*', (req, res) => renderToNodeStream(<Page/> ).pipe(res));
