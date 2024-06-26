import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export const RegisterUser = async (
    req: Request, 
    res: Response
):Promise<Response>=>{
    return res.status(StatusCodes.OK).json({
        succes: "true"
    });
}
export const LogInUser = async (
    req: Request, 
    res: Response
):Promise<any>  =>{

}

export const getUserProfile = async (
    req: Request, 
    res: Response
):Promise<any> =>{


    
}

