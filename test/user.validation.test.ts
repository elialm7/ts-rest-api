import { z } from 'zod';
import { MINIMUNPASSLENGHT, UserValidationSchema, LoginValidationSchema } from '../src/schemas/user.validation';

describe('Validation Schemas', () => {
    
    describe('UserValidationSchema', () => {
        it('should validate a valid user', () => {
            const validUser = {
                username: 'john_doe',
                email: 'john.doe@example.com',
                pass: '1234'
            };
            expect(() => UserValidationSchema.parse(validUser)).not.toThrow();
        });

        it('should invalidate a user with short password', () => {
            const invalidUser = {
                username: 'john_doe',
                email: 'john.doe@example.com',
                pass: '123'
            };
            expect(() => UserValidationSchema.parse(invalidUser)).toThrow();
        });

        it('should invalidate a user with invalid email', () => {
            const invalidUser = {
                username: 'john_doe',
                email: 'john.doe@com',
                pass: '1234'
            };
            expect(() => UserValidationSchema.parse(invalidUser)).toThrow();
        });

        it('should invalidate a user with missing username', () => {
            const invalidUser = {
                email: 'john.doe@example.com',
                pass: '1234'
            };
            expect(() => UserValidationSchema.parse(invalidUser)).toThrow();
        });
    });

    describe('LoginValidationSchema', () => {
        it('should validate a valid login', () => {
            const validLogin = {
                username: 'john_doe',
                pass: '1234'
            };
            expect(() => LoginValidationSchema.parse(validLogin)).not.toThrow();
        });

        it('should invalidate a login with short password', () => {
            const invalidLogin = {
                username: 'john_doe',
                pass: '123'
            };
            expect(() => LoginValidationSchema.parse(invalidLogin)).toThrow();
        });

        it('should invalidate a login with missing username', () => {
            const invalidLogin = {
                pass: '1234'
            };
            expect(() => LoginValidationSchema.parse(invalidLogin)).toThrow();
        });

        it('should invalidate a login with missing password', () => {
            const invalidLogin = {
                username: 'john_doe'
            };
            expect(() => LoginValidationSchema.parse(invalidLogin)).toThrow();
        });
    });
});
