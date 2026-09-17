// rf01 registro da matricula
const aluno = "Patrícia Gomes"
const curso = "Curso de Violão Avançado"
const valorMensalidade = 100
let  taxaMatricula = 30
const idade = 14
const categoriaEstudante = 0
let = valorpago = 130
// rf02
let valorBase = valorMensalidade + taxaMatricula
// rf03

let idadeStatus = "aguardando"
if (idade >= 16) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

// rf04

let descontoStatus = "aguardando"
let valorDesconto = "aguardando"
if (categoria === 1) {
    valorDesconto = 40
    descontoStatus = "desconto aprovado"
} else {
    valorDesconto = 0
    descontoStatus = "Sem desconto"
}

// rf05

const valorFinal = valorBase - valorDesconto

// rf06

let pagamentoStatus = "aguardando"
if (valorPago >= valorFinal) {
    pagamentoStatus = "Matrícula quitada"
} else {
    pagamentoStatus = "Matrícula com saldo pendente"
}

// rf07

const troco = valorPago - valorFinal

// rf 08

let statusMatricula = "aguardando"
if ( idadeStatus === "Idade permitida" && pagamentoStatus === "Matrícula quitada") {
    statusMatricula = "Matrícula confirmada"
} else if (idadeStatus === "Idade permitida" && pagamentoStatus === "Matrícula com saldo pendente" ) {
    statusMatricula = "Matrícula confirmada com saldo pendente"
} else if ( idadeStatus === "Idade não permitida" && pagamentoStatus === "Matrícula quitada") {
    statusMatricula = "Matrícula não pode ser confirmada: idade não permitida"
}

// rf 09
    let resumo = `
    aluno: ${aluno}
    curso: ${curso}
    valor final: ${valorFinal}
    pagamento: ${pagamentoStatus}
    matricula: ${statusMatricula}
`
module.exports = {
    aluno,
    curso,
    valorMensalidade,
    taxaMatricula,
    idade,
    categoriaEstudante,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
}
