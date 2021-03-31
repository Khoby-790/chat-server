const { Schema, SchemaTypes } = require("mongoose");


const schema = new Schema({
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true }
});