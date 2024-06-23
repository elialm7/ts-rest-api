import {Router} from 'express';
import { StatusCodes } from 'http-status-codes';
import {CitiesController} from '../controllers';
const router = Router();


router.post('/create',CitiesController.createCity);





export {router};