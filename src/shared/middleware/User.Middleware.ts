import {NextFunction, Request, Response} from 'express';

import {z, ZodError} from 'zod';
import jwt from 'jsonwebtoken';

import { StatusCodes } from 'http-status-codes';

// i hate this code so much >:(. 
// feels like  javascript rather typescript, i hate it. but for now ill use it.
export function validateData(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse(req.body);
        next();
      } catch (error) {
        if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
              message: `${issue.path.join('.')} is ${issue.message}`,
          }))
          res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
        } else {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
        }
      }
    };
  }

//this code feels so sus
  export function authenticateJWT(req: Request, res:Response, next:NextFunction){
    const token = req.headers.authorization;
    const secret_key = process.env.PRIVATE_KEY_JWT_TOKEN;
    if(!secret_key){
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:'jwt key not set up'
      })
    }
    if(!token){
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Unauthorized'
      });
    }

    jwt.verify(token, secret_key, (err, _)=>{
        if(err){
          return res.status(StatusCodes.FORBIDDEN).json({
            message:'Token verificatin failed'
          });
        }
       // req.user = decoded;
        next();
    });
  
  }
