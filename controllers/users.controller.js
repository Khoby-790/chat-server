const User = require('../models/User');


const createUser = ({ name, email, password }) => {
    User.create({ name, email, hash: password }).then(_ => {
        return true
    }).catch(err => {
        throw new Error("Sorry user already exists")
    });
}

const authenticateUser = async ({ email, password }) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("User does not exist");
}

module.exports = {
    createUser
}