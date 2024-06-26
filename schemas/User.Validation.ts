import {z} from 'zod';
const MINIMUNPASSLENGHT = 4;
export const UserRegistrationValidationSchema = z.object(
    {
        username: z.string(), 
        email: z.string().email(), 
        pass: z.string().min(MINIMUNPASSLENGHT)
    }
);


export const LoginValidationSchema = z.object(
    {
        username: z.string(), 
        pass: z.string().min(MINIMUNPASSLENGHT)
    }
);
