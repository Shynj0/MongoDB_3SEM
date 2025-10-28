# Atividade de Banco de Dados Não Relacional -- MongoDB

## Descrição
Exercicio AULA - 5
Exercício prático usando MongoDB com o banco `clima_alerta`, contendo as
coleções: - dados_meteorologicos - estacoes_meteorologicos

O objetivo é praticar comandos de inserção, consulta, atualização,
exclusão e agregação.

## Script Inicial

``` js
use clima_alerta

db.createCollection("dados_meteorologicos")

show dbs

 db.dados_meteorologicos.insertOne({ cidade: "São Paulo", temperatura: 25, umidade: 70, data: "2025-02-10" })

 db.dados_meteorologicos.insertOne({ cidade: "Rio de Janeiro", temperatura: 28.3, umidade: 65, data: "2025-02-11" })

 db.dados_meteorologicos.insertOne({ cidade: "Belo Horizonte", temperatura: 30, umidade: 88, data: "2025-02-12" })

 db.dados_meteorologicos.insertOne({ cidade: "Vitória", temperatura: 19, umidade: 80, data: "2025-02-12" })

 db.dados_meteorologicos.insertOne({cidade: "Fortaleza",
  temperatura: 31.5, umidade: 75, data: "2025-02-13"});
```

## Questões

 1.Filtrar todas as leituras de Fortaleza acima de 30°C.
 2.Listar apenas nome e localização das estações.
 3.Contar quantas leituras têm sensor “umidade”.
 4.Agrupar leituras por cidade e exibir média de temperatura.
 5.Ordenar as cidades pela maior temperatura média.

------------------------------------------------------------------------

📌 Autor: João Pedro Souza dos Anjos
