const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');


const signUp = async (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {         //bcrypt tekhou 3 params : 1)pass2)salt3)err,hash 
        if (err)                                                //ken fama err when cyrpting the password
        {
            return res.status(500).json({
                error: err
            });
        }
        else                                                  //else create the user
        {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                mail: req.body.mail,
                password: hash,                             // pass mahtout fil hash
                phone: req.body.phone,
                adresse: req.body.adresse
            });
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'User created'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        }
    })
};
module.exports = { signUp };