const { Schema, SchemaTypes, model } = require("mongoose");


const schema = new Schema({
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true },
    hash: { type: SchemaTypes.String, required: true }
});


schema.pre("save", (next) => {
    this.hash = 
})

module.exports = model("User", schema);