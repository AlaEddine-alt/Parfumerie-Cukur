const mongoose = require('mongoose');

const commandSchema = new mongoose.Schema({
    _id_commande: mongoose.Schema.Types.ObjectId,
    date_commande: { type: Date, default: Date.now },
    etat_commande: { type: String, default: 'en cours' },
    id_customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true },
    //order_items: [orderItem],
    total_amount: { type: Number, default: 0 },
    adresse_commande: { type: String ,  required :true },
    methode_paiement: { type: String, default: 'cash' }
});

const Command = mongoose.model('Command', commandSchema);

module.exports = Command;
