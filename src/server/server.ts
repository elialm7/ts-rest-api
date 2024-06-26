import express  from 'express';

import bodyparser from 'body-parser';
import { routers } from '../routes';
const server = express();

server.use(bodyparser.json());
server.use('/api/user', routers.UserRouter);



export {server};