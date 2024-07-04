import {Router} from 'express';
import { UserControllers } from '../controllers';
import { Validation } from '../schemas';
import { authenticateJWT, validateData } from '../shared/middleware';
const UserRouter = Router();

UserRouter.post('/register', validateData(Validation.UserValidationSchema),UserControllers.RegisterUser);
UserRouter.get('/login', validateData(Validation.LoginValidationSchema),UserControllers.LogInUser);
UserRouter.get('/profile', authenticateJWT,UserControllers.getUserProfile);

export {UserRouter};