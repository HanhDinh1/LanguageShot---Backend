const mongoose = require('mongoose');
const {Schema, model } = mongoose;

const noteSchema = new Schema({
    title: String,
    content: String 
});

module.exports = model('Note', noteSchema);