const mongoose = require ('mongoose');

const userSchema =new  mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId ,
    name : {Type: String , required : true},
    mail : {Type: String , required : true},
    password : {Type: String , required : true},
    adresse : {Type: String , required : true},
    phone: {Type:Number  , required : true}
})

module.exports = mongoose.model('User' , userSchema);

