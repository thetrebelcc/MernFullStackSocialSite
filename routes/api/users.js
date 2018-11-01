const express = require('express');
const router = express.Router();
// Loads User model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: "user works"}) );



router.post('/register', (req, res) => {
User.findOne({ email: req.body.email })
.then(ise => {
    if (user) {
        return res.status(400).json({email: "email already in use"});
    } else {
        const newUser = new User ({
            name: req.body.name,
            email: rew.body.email,
            avatar,
            password: req.body.password
        })
    }
})
});








module.exports = router;