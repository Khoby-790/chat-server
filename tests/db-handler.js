const mongoose = require('mongoose');
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
    const uri = await mongod.getUri();

    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    await mongoose.connect(uri, mongooseOpts);
}