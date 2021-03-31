const { Schema, SchemaTypes, model } = require("mongoose");
const { hash } = require('../libs/index')




const schema = new Schema({
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true },
    hash: { type: SchemaTypes.String, required: true }
});


schema.pre("save", async function (next) {
    const user = this;
    this.hash = await hash(user.hash);
    next();
})

module.exports = model("User", schema);