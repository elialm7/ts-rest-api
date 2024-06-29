import { UserInMemoryDatabase, TemporalCompleteUser } from '../src/database/temporalUser.database';

describe('UserInMemoryDatabase', () => {
    let userDB: UserInMemoryDatabase;

    beforeEach(() => {
        userDB = new UserInMemoryDatabase();
    });

    it('should add a new user', () => {
        const user: TemporalCompleteUser = { userid: 1, username: 'john_doe', password: '123456', userInfo: 'Some info about John' };
        userDB.addUser(user);
        expect(userDB.getUserById(1)).toEqual(user);
    });

    it('should retrieve a user by ID', () => {
        const user: TemporalCompleteUser = { userid: 1, username: 'john_doe', password: '123456', userInfo: 'Some info about John' };
        userDB.addUser(user);
        const retrievedUser = userDB.getUserById(1);
        expect(retrievedUser).toEqual(user);
    });

    it('should check if a user exists', () => {
        const user: TemporalCompleteUser = { userid: 1, username: 'john_doe', password: '123456', userInfo: 'Some info about John' };
        userDB.addUser(user);
        expect(userDB.userExists(1)).toBe(true);
        expect(userDB.userExists(2)).toBe(false);
    });
});
