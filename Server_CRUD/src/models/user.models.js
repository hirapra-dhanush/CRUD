const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: true
    }
},);

const User = mongoose.model("user", userSchema);

module.exports = User;