# Atividade de Banco de Dados Não Relacional -- MongoDB

## Descrição
Exercicio AULA - 4
Exercício prático usando MongoDB com o banco `clima_alerta`, contendo as
coleções: - dados_meteorologicos - estacoes_meteorologicos

O objetivo é praticar comandos de inserção, consulta, atualização,
exclusão e agregação.

## Script Inicial

``` js
use clima_alerta

db.createCollection("estacoes_meteorologicas")

```

## Questões

 1. Inserir 5 novas estações meteorológicas com diferentes sensores.
 2. Adicionar um novo campo "manutenção" com valor pendente a todas as estações.
 3. Atualizar a estação "Estação Sul" para adicionar um novo sensor "pressão".
 4. Atualizar a "Estação Norte" para remover o sensor "vento".
 5. Remover todas as estações que não possuem sensores cadastrados.
 6. Remover todas as estações que possuem menos de 3 sensores.
 7. Listar todas as estações que possuem o sensor "temperatura".
 8. Encontrar todas as estações que possuem o sensor "temperatura" E "pressão".
 9. Identificar todas as estações cujo campo localizacao seja do tipo string.
 10. Aplicar paginação para listar 4 estações por vez, ignorando as 2 primeiras.

------------------------------------------------------------------------

📌 Autor: João Pedro Souza dos Anjos
