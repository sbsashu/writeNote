const mongoose = require('mongoose');
const Schema = mongoose.Schema
const newNote = new Schema({
    date: { type: String , default: new Date()},
    note: { type: String}
})


const Note = mongoose.model('notes', newNote)

module.exports = {
    Note
}