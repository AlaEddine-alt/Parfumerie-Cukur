const mongoose = require('mongoose');

const orderitemSchema = new mongoose.Schema({
    _id_orderitem: mongoose.Schema.Types.ObjectId,
    _id_product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    _id_command: { type: mongoose.Schema.Types.ObjectId, ref: 'command', required: true },
    quantity : {type : Number , required : true}
    
});                                                                                                                     


const Orderitem = mongoose.model('Orderitem', orderitemSchema);

module.exports = Orderitem;