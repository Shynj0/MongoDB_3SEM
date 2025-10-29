require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

// Capturando logs/eventos da conexão (Passo 5 da atividade)
mongoose.connection.on("connected", () => console.log("Banco conectado [Log Mongoose]"));
mongoose.connection.on("disconnected", () => console.log("Banco desconectado [Log Mongoose]"));
mongoose.connection.on("error", err => console.error("Erro na conexão [Log Mongoose]:", err));

// Conexão
mongoose.connect(uri)
.then(() => console.log("OK - Tentativa de conexão bem-sucedida"))
.catch(err => console.error("Erro ao iniciar a conexão", err));