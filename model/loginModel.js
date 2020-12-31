const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    id: String,
    password: String
});

module.exports = mongoose.model('Login',LoginSchema);