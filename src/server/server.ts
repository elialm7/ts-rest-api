import express  from 'express';

import bodyparser from 'body-parser';
import { router } from '../routes';
const server = express();

server.use(bodyparser.json());
server.use('/api', router);



export {server};