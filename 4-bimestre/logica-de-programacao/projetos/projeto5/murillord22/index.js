const prompt = require("prompt-sync")()

const nomeTurno = prompt("Digite o nome do seu turno:")
const meta = Number(prompt("Digite sua Meta de produções:"))
const producaoInicial = Number(prompt("Digite sua produção inicial:"))
const pecasPorCaixa = Number(prompt("digite a quantidade de peças por caixa:"))
let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}
let caixasNecessarias = 0

do {
    caixasNecessarias++
    producaoFinal = producaoFinal - pecasPorCaixa
} while (producaoFinal > 0)
producaoFinal = meta

const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"
const resumo = `
==== RESUMO ====
Turno: ${nomeTurno}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação: ${situacaoMeta}
`
console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}