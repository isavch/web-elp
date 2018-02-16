import * as express from 'express'
import { renderPage } from './page';

const port = process.env.PORT || 8000;
const app = express();
const server = app.listen(port, () => console.log('Listening on port %d', server.address().port));

app.use(express.static('./lib/public'));

app.get('*', renderPage);
