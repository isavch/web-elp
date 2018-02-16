import * as express from 'express';
import { renderPage } from './page';

const defaultPort = 8000;
const port = process.env.PORT || defaultPort;
const app = express();
const server = app.listen(port, () => console.log('Listening on port %d', server.address().port)); // tslint:disable-line

app.use(express.static('./lib/public'));

app.get('*', renderPage);
