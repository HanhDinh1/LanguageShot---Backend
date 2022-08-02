const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");

const Phrase = require("../models/Phrase.model");

//  POST /api/phrases  -  Creates a new phrase
router.post("/phrases", isAuthenticated, (req, res, next) => {
  const { engPhrase, selectedLang, languageCode } = req.body;

  Phrase.create({ engPhrase, selectedLang, languageCode })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// //  GET /api/phrases -  Retrieves all of the phrases
router.get("/phrases", (req, res, next) => {
  Phrase.find()
    .then((allPhrases) => res.json(allPhrases))
    .catch((err) => res.json(err));
});

//  GET /api/phrases/:phraseId -  Retrieves a specific phrase by id
router.get("/phrases/:phraseId", (req, res, next) => {
  const { phraseId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phraseId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Phrase.findById(phraseId)
    .then((phrase) => res.status(200).json(phrase))
    .catch((error) => res.json(error));
});

//  GET /api/phrases/:phraseId -  Retrieves a specific phrase by id
router.get("/phrases/code/:languageCode", (req, res, next) => {
  const { languageCode } = req.params;

  Phrase.find({languageCode})
    .then((phrasesArray) => res.status(200).json({phrasesArray}))
    .catch((error) => res.json(error));
});


// PUT  /api/phrases/:phraseId  -  Updates a specific phrase by id
router.put("/phrases/:phraseId", isAuthenticated, (req, res, next) => {
  const { phraseId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phraseId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Phrase.findByIdAndUpdate(phraseId, req.body, { new: true })
    .then((updatedPhrase) => res.json(updatedPhrase))
    .catch((error) => res.json(error));
});

// DELETE  /api/phrases/:phraseId  -  Deletes a specific phrase by id
router.delete("/phrases/:phraseId", isAuthenticated, (req, res, next) => {
  const { phraseId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phraseId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Phrase.findByIdAndRemove(phraseId)
    .then(() =>
      res.json({
        message: `Phrase with ${phraseId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
