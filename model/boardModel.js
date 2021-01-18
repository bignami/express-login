const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);

const BoardSchema = new Schema({
    postId: Number,
    service: String,
    subject: String,
    content: String,
    auth_key: String,
    price : Number,
});

BoardSchema.plugin(autoIncrement.plugin, {
    model: 'Board',
    field: 'postId',
    startAt: 1
});

module.exports = mongoose.model('Board',BoardSchema);