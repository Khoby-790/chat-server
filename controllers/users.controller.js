const User = require('../models/User');


const createUser = async ({ name, email, password }) => {
    const user = await User.findOne({ email });
    if (user) throw new Error("User already exist");
    const _ = await User.create({ name, email, hash: password });
    // console.log(_)
    return true;
}

const 

module.exports = {
    createUser
}