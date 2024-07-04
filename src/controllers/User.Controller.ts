import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TemporalCompleteUser, UserInMemoryDatabase } from "../database/userdb.temporal";
import jwt from 'jsonwebtoken';
const users:UserInMemoryDatabase = new UserInMemoryDatabase();
let lastid = 1;
export const RegisterUser = async (
    req: Request, 
    res: Response
):Promise<Response>=>{
    const {username, email, pass} = req.body;
    lastid = lastid+1;

    users.addUser({
        userid:lastid, 
        username, 
        password:pass, 
        email
    });

    return res.status(StatusCodes.OK).json({
        status: "success"
    });
}
export const LogInUser = async (
    req: Request, 
    res: Response
):Promise<Response>  =>{
    const {username, pass} = req.body;
    const userResult = users.userExists(username, pass);
    const secret_key:string = process.env.PRIVATE_KEY_JWT_TOKEN as string;
    const token = jwt.sign({
        userid:userResult?.userid
    }, secret_key);
    return res.status(StatusCodes.OK).json({
        token
    });
}

export const getUserProfile = async (
    req: Request, 
    res: Response
):Promise<Response> =>{
    const secret_key = process.env.PRIVATE_KEY_JWT_TOKEN as string;
    const token = req.headers.authorization as string;
    let uid:number = 0;
    jwt.verify(token, secret_key, (err, decoded) => {

        if (err) {
            return res.status(StatusCodes.FORBIDDEN).json({
                message: 'Token verificatin failed'
            });
        }
        if (!decoded) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'an error happened'
            });
        }
        uid = (decoded as {userid:number}).userid;
    });  
    
    const userData = users.getUserById(uid);

    return res.status(StatusCodes.OK).json(userData);



}

