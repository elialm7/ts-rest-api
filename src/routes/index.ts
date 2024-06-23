import {Router} from 'express';
import { StatusCodes } from 'http-status-codes';
const router = Router();


router.get('/info/', async (req, res)=>{
    res.status(StatusCodes.OK).send({
        status:'working'
    });

})





export {router};