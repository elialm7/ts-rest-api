import { Request, Response } from 'express';


export const createCity = async (req: Request, res: Response): Promise<Response>=>{
     return res.status(200).send({
         sended: req.body
     });

};