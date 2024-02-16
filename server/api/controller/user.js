const mongoose = require ('mongoose');
const User=require('../models/user');
const bcrypt = require ('bcryptjs');


const SignUp  =  async (req , res) => {
	try {
		const user = new User ({
			_id : new mongoose.Types.ObjectId(),
			name : req.body.name,
			mail : req.body.mail,
			password : bcrypt.hashSync(req.body.password , 10),
            adresse : req.body.adresse , 
            phone : req.body.phone
		})
		const saveduser = await user.save();
		if (! saveduser )
			res.status(500).json ({error : 'user cannot be created' });
		else 
		    res.status(201).json (saveduser);
	}
	catch(error) {
		console.error(error);
		res.status(500).json ({error : 'Internal server error'});
	}
    };

    module.exports = {SignUp,
    };
