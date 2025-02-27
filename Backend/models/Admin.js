const mongoose = require("mongoose");
const bcryot = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
})

// hashing password
AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;