const User = require('../models/User');

async function createUser({ name, email, password }) {
    const user = new User({ name, email, hash: password });
    try {
        await user.save();
    } catch (error) {
        throw new Error("Sorry user already exists")
    }
}

const authenticateUser = async ({ email, password }) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("User does not exist");
}

async function getUsers({ filters }) {
    const users = await User.find({ ...filters });
    return users;
}

module.exports = {
    createUser,
    authenticateUser,
    getUsers
}