const User = require('../models/User');


const createUser = async ({ name, email, password }) => {
    const user = await User.findOne({ email });
    if (user) return false;
    const _ = await User.create({ name, email, hash: password });
    return true;
}

const authenticateUser = async ({ email, password }) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("User does not exist");
}

module.exports = {
    createUser
}