const mongoose = require('mongoose');

const orderitemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _id_product: { type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    _id_command: { type: mongoose.Schema.Types.ObjectId, ref: 'command'},
    quantity : {type : Number }
    
});                                                                                                                     


const Orderitem = mongoose.model('Orderitem', orderitemSchema);

module.exports = Orderitem;