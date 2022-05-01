let servico;

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

    carrinho: (req, res) => {
        servico  = req.body

        if(servico){
            res.render('pg-carrinho', {servico})
        } else (res.send('<h1>Nao tem produto</h1>'))
    },

    pagamento: (req, res) => {
        res.render('pg-pagamento')
    },

    login: (req, res) => {
        res.render('card-login-e-registro')
    },

    cadastroCartao: (req, res) => {
        res.render('pg-cadastro-cartao')
    },

    enviarPedidoCarrinho: (req, res) => {
        servico = req.body
        res.render('pg-carrinho', {servico})
    }

}

module.exports = indexController