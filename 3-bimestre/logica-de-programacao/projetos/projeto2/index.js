// RF01 — Registro do pedido
let cliente = "Lucas Almeida"
let produto = "Notebook Gamer"
let preco = 4500
let quantidade = 2
let estoque = 10
let valorPago = 9000

// RF02 — Cálculo do subtotal
let subtotal = preco * quantidade

// RF03 — Verificação do estoque
let estoqueDisponivel
if (quantidade <= estoque) {
    estoqueDisponivel = "Sim"
} else {
    estoqueDisponivel = "Não"
}

// RF04 — Aplicação de desconto
let descontoPercentual
if (subtotal >= 1000) {
    descontoPercentual = 10
} else {
    descontoPercentual = 0
}
let valorDesconto = (subtotal * descontoPercentual) / 100

// RF05 — Cálculo do valor final
let valorFinal = subtotal - valorDesconto

// RF06 — Verificação do pagamento
let pagamentoStatus
if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

// RF07 — Cálculo do troco
let troco
if (valorPago >= valorFinal) {
    troco = valorPago - valorFinal
} else {
    troco = 0
}

// RF08 — Situação do pedido
let statusPedido
if (quantidade <= estoque) {
    statusPedido = "Pedido disponível para finalização"
} else {
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
}

// RF09 — Resumo do pedido
let resumo = `
========================================
           RESUMO DO PEDIDO
========================================
Cliente: ${cliente}
Produto: ${produto}
Preço Unitário: R$ ${preco}
Quantidade: ${quantidade}
----------------------------------------
Subtotal: R$ ${subtotal}
Desconto Aplicado: ${descontoPercentual}%
Valor do Desconto: R$ ${valorDesconto}
Valor Final: R$ ${valorFinal}
----------------------------------------
Situação do Estoque: ${estoqueDisponivel}
Valor Pago: R$ ${valorPago}
Situação do Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
----------------------------------------
Situação do Pedido: ${statusPedido}
========================================
`
console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
  }
