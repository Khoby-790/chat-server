const { Schema, SchemaTypes, model } = require("mongoose");
const crypto = require("crypto")


async function hash(password) {
    return new Promise((resolve, reject) => {
        // generate random 16 bytes long salt
        const salt = crypto.randomBytes(16).toString("hex")

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString('hex'))
        });
    })
}

async function verify(password, hash) {
    return new Promise((resolve, reject) => {
        const [salt, key] = hash.split(":")
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(key == derivedKey.toString('hex'))
        });
    })
}

const schema = new Schema({
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true },
    hash: { type: SchemaTypes.String, required: false }
});


schema.pre("save", async (next) => {
    this.hash = await hash(this.hash);
    next();
})

module.exports = model("User", schema);