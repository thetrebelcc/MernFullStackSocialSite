const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Loads profile models


// Load user profile








router.get('/test', (req, res) => res.json({ msg: "Profile works" }));


module.exports = router;