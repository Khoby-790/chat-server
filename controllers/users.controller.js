const User = require('../models/User');


const createUser = ({ name, email, password }) => {
    User.create({ name, email, hash: password }).then(_ => true).catch(err => new Error(err.message));
}

const authenticateUser = async ({ email, password }) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("User does not exist");
}

module.exports = {
    createUser
}