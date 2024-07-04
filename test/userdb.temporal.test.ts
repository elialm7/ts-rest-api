import { UserInMemoryDatabase, TemporalCompleteUser } from '../src/database/userdb.temporal';

describe('UserInMemoryDatabase', () => {
    let userDB: UserInMemoryDatabase;

    beforeEach(() => {
        userDB = new UserInMemoryDatabase();
    });

    it('should add a new user', () => {
        const user: TemporalCompleteUser = { userid: 1, username: 'john_doe', password: '123456', email: 'some email' };
        userDB.addUser(user);
        expect(userDB.getUserById(1)).toEqual(user);
    });

    it('should retrieve a user by ID', () => {
        const user: TemporalCompleteUser = { userid: 1, username: 'john_doe', password: '123456', email: 'some email' };
        userDB.addUser(user);
        const retrievedUser = userDB.getUserById(1);
        expect(retrievedUser).toEqual(user);
    });
});
