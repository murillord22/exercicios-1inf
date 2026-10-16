const prompt = require("prompt-sync")()

const nomeTurno = prompt("Digite o seu turno:")
const meta = Number(prompt("Digite a sua meta de produção:"))
const producaoInicial = Number(prompt("Digite a produção inicial:"))
const pecasPorCaixa = Number(prompt("Digite a quantidade de peças por caixa:"))
let producaoFinal = producaoInicial
let situacaoMeta = "Meta atingida"


while(producaoFinal < meta) {
    producaoFinal++
    situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"
}
let caixasNecessarias = 0
let restante = 0

do {
    caixasNecessarias++
    restante = producaoFinal - pecasPorCaixa
} while (restante > 0 )


const resumo = `
RESUMO LEGAL DEMAIS
TURNO: ${nomeTurno}
PRODUÇÃO FINAL: ${producaoFinal}
CAiXAS NECESSARIAS: ${caixasNecessarias}
SITUAÇÃO DA META: ${situacaoMeta}
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