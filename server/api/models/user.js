const mongoose = require ('mongoose');

const userSchema =new  mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId ,
    name : {type: String , required:true},
    mail : {type: String , required:true},
    password : {type: String , required:true},
    adresse : {type: String , required:true },
    phone: {type:Number , required:true  }
})

module.exports = mongoose.model('User' , userSchema);

