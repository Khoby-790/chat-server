const User = require('../models/User');

async function createUser({ name, email, password }) {
    const user = new User({ name, email, hash: password });
    const __ = await user.save();
    return __;
}

const authenticateUser = async ({ email, password }) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("User does not exist");
}

module.exports = {
    createUser
}