const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const auth = require ("../../middleware/auth");

//signUp(POST)
const signUp = (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {         //bcrypt tekhou 3 params : 1)pass2)salt3)err,hash 
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
                adresse: req.body.adresse,
                role: req.body.role
            });
            await user.save()
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
//GetAllUsers
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//GetUserById(GET BY ID)
const GetUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//DeleteUserById(DELETE BY ID)
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'user deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//UpdateUserById(UPDATE BY ID)
const updateUser = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken._id; 
    if (userId === req.params.id)
    {
        try {
            if (req.body.password)
            {  
                bcrypt.hash(req.body.password, 10, async (err, hash) => {         
                if (err)                                                
                {
                    return res.status(500).json({
                        error: err
                    });
                }
                else                                                  
                {   req.body.password = hash;
                    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
                    res.json(updatedUser);
                }});
            }
            else
            {   
                const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
                res.json(updatedUser);
            }
        }
        catch (error)
        {
            res.status(400).json({ message: error.message });
        }
    }
    else 
    {
        res.status(400).json({ message: "you are not allowed to update this user"});
    }
};
//SignIn
const signIn = async (req, res) => {
    User.find({ mail: req.body.mail })
        .exec()
        .then(
            user => {                             //result mtaa User.find besh tjina fi ARRAY esmou user
                if (user.length < 1) {
                    return res.status(401).json({             // we don't send 404 and message : "mail doesn't exist" beacause hackers can  try different email and they can know which ones exit in our data base 
                        message: 'Auth failed 1'
                    });
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {       //result bool , check documentation
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth failed 2'
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                mail: user[0].mail,
                                _id: user[0]._id,
                                role: user[0].role          //role mtaa user[0] fil data base
                            },
                            process.env.JWT_SECRET,                //lezem yebtbadel men hné 
                            {
                                expiresIn: "1h"
                            }
                        );
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        });
                    }
                    res.status(401).json({
                        message: 'Auth failed 3'              //3malet nwemer fil msg , besh naaref el erreur mnin
                    });
                });
            }
        )
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}


module.exports = {
    signUp,
    GetUserById,
    deleteUser,
    updateUser,
    getAllUsers,
    signIn,
};
