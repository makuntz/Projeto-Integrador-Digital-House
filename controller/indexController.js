const {sequelize, Pedido} = require('../models/index');


const indexController = {
    home: (req, res) => {
        res.render('pg-home')
    },

    produtos: (req, res) => {
        res.render('pg-produtos')
    },
    
    produtos2: (req, res) => {
        res.render('pg-produtos2-teste')
    },

    // carrinho: (req, res) => {
    //     servico  = req.body.servico

    //     console.log(req)
    //     if(servico){
    //         res.render('pg-carrinho', {servico: servico})
    //     } else (res.send('<h1>Nao tem produto</h1>'))
    // },

    // pagamento: (req, res) => {
    //     //aqui é a parte de enviar os produtos pra pg pagamento
    //     req.session.servico = servico
    //     console.log(req.session.servico)
    //     console.log(req.session.user)
    //     res.render('pg-pagamento', {servico})
    // },

    login: (req, res) => {
        res.render('card-login-e-registro')
    },

    cadastroCartao: (req, res) => {
        res.render('pg-cadastro-cartao')
    },

    enviarPedidoCarrinho: (req, res) => {
        const servico = req.body
        // req.session.servico = servico
        const {pao, acompanhamento, bebidas} = servico
        const paoValor = parseInt(pao.split('R$ ')[1].replace(',', '.'))
        const acompanhamentoValor = parseInt(acompanhamento.split('R$ ')[1].replace(',', '.'))
        const bebidaValor = parseInt(bebidas.split('R$ ')[1].replace(',', '.'))
        const valorTotal = paoValor + acompanhamentoValor + bebidaValor
        
        servico.valorTotal = valorTotal
        
        res.render('pg-carrinho', {servico})
    }, 

    enviarPedidoBanco: (req, res) => {
        const {pao, acompanhamento, bebida, total} = req.body
        const enviarPedido = async () => {
            const pedido = await Pedido.create({
                pao: pao,
                acompanhamento: acompanhamento,
                bebida: bebida,
                valor: total
            })
        }
        enviarPedido()
        res.render('pg-pedidoenviado')
         
    }
    
}

module.exports = indexController