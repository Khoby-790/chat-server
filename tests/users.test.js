
const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const userService = require('../controllers/users.controller');


/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());