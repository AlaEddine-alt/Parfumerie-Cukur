const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    prix: Number,
    categorie: String,
    sexe: String,
    contenance: String

});

module.exports = mongoose.model('Product', productSchema);