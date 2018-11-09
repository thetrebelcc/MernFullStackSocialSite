const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Loads profile models

const Profile = require('../../models/Profile'); 

// Load user profile
const User = require('../../models/User'); 




// @route GET API / Profile
// @desc Test profile route
// @access public
router.get('/test', (req, res) => res.json({ msg: "Profile works" }));

// @route GET API/Profile
// @desc Test profile route
// @access private
router.get('/', passport.authenticate('jwt', {session: false}), (req,res) => {
Profile.findOne({user: req.user.id})
.then(profile => {
    if(!profile){
        errors.noprofile = 'There is no profile';
        return res.status(404).json(errors);
    }
    res.json(profile);
})

});



module.exports = router;