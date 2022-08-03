const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");

const Phrase = require("../models/Phrase.model");

//  POST /api/deck/addPhrase/:phraseId  -  Add phrase to deck and create deck if one does not already exists for that language
router.post("/deck/addPhrase/:phraseId", isAuthenticated, (req, res, next) => {
    
});

// //  GET /api/decks -  Retrieves all of the user's decks
router.get("/decks", isAuthenticated, (req, res, next) => {

});

//  GET /api/deck/removePhrase/:phraseId
router.get("/deck/removePhrase/:phraseId", isAuthenticated, (req, res, next) => {
 
});


// DELETE  /api/deck/:deckId  -  Deletes a specific deck by id
router.delete("/deck/:deckId", isAuthenticated, (req, res, next) => {
  
});

module.exports = router;