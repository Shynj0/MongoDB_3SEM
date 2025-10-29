const mongoose = require("mongoose");

const jogoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,
        min: 0
    },
    estoque: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    dataCadastro: { 
        type: Date, 
        default: Date.now 
    }
});
module.exports = mongoose.model("Jogo", jogoSchema);