const express = require("express");
const router = express.Router();
const Jogo = require("../models/Jogo");

const errorHandler = (res, erro, status = 500, mensagem = "Erro interno do servidor") => {
    console.error(erro);
    res.status(status).json({ erro: mensagem });
};

router.get("/", async (req, res) => {
    try {
        const jogos = await Jogo.find();
        res.json(jogos);
    } catch (erro) {
        errorHandler(res, erro, 500, "Erro ao buscar jogos");
    }
});

router.post("/", async (req, res) => {
    try {
        if (!req.body.nome || !req.body.categoria || req.body.preco === undefined) {
             return res.status(400).json({ erro: "Dados incompletos para o jogo." });
        }
        
        const novoJogo = new Jogo(req.body);
        await novoJogo.save();
        res.status(201).json(novoJogo); 
    } catch (erro) {
        errorHandler(res, erro, 400, "Erro ao criar jogo. Verifique os dados fornecidos.");
    }
});

router.put("/:id", async (req, res) => {
    try {
        const jogoAtualizado = await Jogo.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } 
        );

        if (!jogoAtualizado) {
            return res.status(404).json({ erro: "Jogo não encontrado." }); 
        }

        res.json(jogoAtualizado);
    } catch (erro) {
        errorHandler(res, erro, 400, "Erro ao atualizar jogo. Verifique o ID e os dados.");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const jogoRemovido = await Jogo.findByIdAndDelete(req.params.id);

        if (!jogoRemovido) {
            return res.status(404).json({ erro: "Jogo não encontrado para remoção." });
        }

        res.json({ mensagem: "Jogo removido com sucesso!" }); 
    } catch (erro) {
        errorHandler(res, erro, 500, "Erro ao remover jogo.");
    }
});

module.exports = router;