const mongoose = require ('mongoose');
const User=require('../models/user');

const SingUp  =  async (req , res) => {
    const user= new User({
        _id : new mongoose.Types.ObjectId(),
        name:req.body.name,
        mail:req.body.mail,
        password:bcrypt.hashSync(req.body.password,10),
        phone:req.body.phone,
        adresse : req.body.adresse
    
        })

        try{
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
        
         //10 salt , eli besh nzidouh lel password kbal maysir hash 
    }


