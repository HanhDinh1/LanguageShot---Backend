const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");

const Note = require("../models/Note.model");

router.post("/note/addNote/:noteId", isAuthenticated, (req, res, next) => {
    
});

// Retrieves all of the user's notes
router.get("/notes", isAuthenticated, (req, res, next) => {

});

router.get("/note/removeNote/:noteId", isAuthenticated, (req, res, next) => {
 
});


// Deletes a specific note by id
router.delete("/note/:noteId", isAuthenticated, (req, res, next) => {
  
});

module.exports = router;