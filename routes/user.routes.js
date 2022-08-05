const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const { isAuthenticated } = require('./../middleware/jwt.middleware.js');

//  GET /api/users -  Retrieves all of the user's decks
router.get("/user/:id", (req, res, next) => {
const { id } = req.params;
User.findById(id).then (response => {
  console.log(response)  
  res.json(response)
})
    .catch((err) => console.log(err));
});

module.exports = router;