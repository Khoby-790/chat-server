
const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const userService = require('../controllers/users.controller');


const user = {
    name: "John Doe",
    email: "john@doe.com",
    password: "hellojohn"
}

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());


/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());



describe('User Model', () => {
    it('should create a user and not throw an error', () => {
        expect(async () => await userService.createUser(user)).not.toThrow();

    });

    // test('should throw and error if user is already existent', async () => {
    //     await userService.createUser(user);
    //     expect(async () => await userService.createUser(user)).toThrow("Sorry user already exists");
    // });

    test('should fetch all created users with given filters', async () => {
        // await userService.createUser(user);
        expect(async () => await userService.getUsers({})).not.toThrow();
    });
});