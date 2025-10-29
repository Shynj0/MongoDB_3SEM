const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jogoRoutes = require("./routes/jogos"); 

const app = express();
app.use(express.json()); 
app.use(cors()); 


mongoose.connect("mongodb://127.0.0.1:27017/api_games")
    .then(() => console.log("Conectado ao MongoDB! (Banco: api_games)"))
    .catch((err) => console.error("Erro ao conectar", err)); 
app.use("/jogos", jogoRoutes);

app.get("/", (req, res) => {
    res.send("API de Jogos rodando. Acesse /jogos");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Rotas da API: http://localhost:${PORT}/jogos`);
});