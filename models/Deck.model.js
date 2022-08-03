const mongoose = require('mongoose');
const {Schema, model } = mongoose;

const deckSchema = new Schema({
    phrasesArray: [{
        type: Schema.Types.ObjectId,
        ref: 'Phrase'
    }],
    languageCode: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Deck', deckSchema);