const cliente = "Leandro Vieira"
const opcaoMenu = 2
const quantidade = 3
const formaPagamento = "dinheiro"
const statusPedido = "cancelado"

let prato = "aguardando"
let precoUnitario = "aguardando"
let pagamentoMensagem = "aguardando"
let descontoPercentual = "aguardando"
let statusMensagem = "aguardando"

switch (opcaoMenu) {
    case 1:
        prato = "Sushi"
        break
    case 2:
        prato = "Temaki"
        break
    case 3:
        prato = "Yakisoba"
        break
    case 4:
        prato = "Chá gelado"
        break
    default:
        prato = "Opção invalida"
}

switch (prato) {
    case "Sushi":
        precoUnitario = 32
        break
    case "Temaki":
        precoUnitario = 24
        break
    case "Yakisoba":
        precoUnitario = 28
        break
    case "Chá gelado":
        precoUnitario = 9
        break
    default:
        precoUnitario = 0
}

switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via pix"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Forma de pagamento invalida"
}

switch (formaPagamento) {
    case "pix":
        descontoPercentual = 0
        break
    case "dinheiro":
        descontoPercentual = 0
        break
    default:
        descontoPercentual = 0
}

switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
    default:
        statusMensagem = "Status desconhecido"
}

const subtotal = precoUnitario * quantidade

const freteStatus = subtotal >= 80 ? "Frete gratis" : "Frete pago"

const frete = freteStatus === "Frete gratis" ? 0 : 8

const desconto = subtotal * descontoPercentual / 100

const total = subtotal - desconto + frete

const resumo = `
Cliente: ${cliente}
Prato: ${prato}
Quantidade: ${quantidade}
Subtotal: ${subtotal}
Frete: ${freteStatus}
Pagamento: ${pagamentoMensagem}
Desconto: ${desconto}
Total: ${total}
Status: ${statusMensagem}
`

console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}