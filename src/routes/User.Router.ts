import {Router} from 'express';
import { UserControllers } from '../controllers';
import { Validation } from '../schemas';
import { validateData } from '../shared/middleware';
const UserRouter = Router();

UserRouter.post('/register', validateData(Validation.UserValidationSchema),UserControllers.RegisterUser);
UserRouter.get('/login', validateData(Validation.LoginValidationSchema),UserControllers.LogInUser);
UserRouter.get('/profile', UserControllers.getUserProfile);

export {UserRouter};