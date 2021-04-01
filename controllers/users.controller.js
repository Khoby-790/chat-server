const User = require('../models/User');


const createUser = async ({ name, email, password }) => {
    try {
        await User.create({ name, email, hash: password });
        return true;
    } catch (error) {
        throw new Error(error.message)
    }
}

const authenticateUser = async ({ email, password }) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("User does not exist");
}

module.exports = {
    createUser
}