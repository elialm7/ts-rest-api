import {Router} from 'express';
import { UserControllers } from '../controllers';

const UserRouter = Router();

UserRouter.post('/register', UserControllers.RegisterUser);
UserRouter.get('/login', UserControllers.LogInUser);
UserRouter.get('/profile', UserControllers.getUserProfile);

export {UserRouter};