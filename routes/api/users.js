const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');




// Loads User model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: "user works"}) );



router.post('/register', (req, res) => {
User.findOne({ email: req.body.email })
.then(user => {
    if (user) {
        return res.status(400).json({email: "email already in use"});
    } else {

        const avatar = gravatar.url(req.body.email, {
            s: '200',
            r: "pg",
            d: "mm"
        });

        const newUser = new User ({
            name: req.body.name,
            email: req.body.email,
            avatar,
            password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err
                newUser.password = hash;
                newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));

            })
        })
       
    }
})
});


router.post('/login', (req,res) => {
const email = req.body.email;
const password = req.body.password;

// find used by email 
User.findOne({email})
.then(user => {
    if(!user){
        return res.status(404).json({email:'User not found'})
    }

    // check password
bcrypt.compare(password, user.password).then(isMatch => {
    if(isMatch){
        res.json({ mes: 'Success'});
    } else{
        return res.status(400).json({ password: 'Password wrong dummy'})
    }
})
     
})
});








module.exports = router;