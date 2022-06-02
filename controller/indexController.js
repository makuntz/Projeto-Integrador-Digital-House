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
        servico  = req.body.servico
        req.session.pagamento = servico;

        console.log(req)
        if(servico){
            res.render('pg-carrinho', {servico: servico})
        } else (res.send('<h1>Nao tem produto</h1>'))
    },

    pagamento: (req, res) => {
        //aqui é a parte de enviar os produtos pra pg pagamento
        req.session.servico = servico
        console.log(req.session.servico)
        console.log(req.session.user)
        res.render('pg-pagamento', {servico})
    },

    login: (req, res) => {
        res.render('card-login-e-registro')
    },

    cadastroCartao: (req, res) => {
        res.render('pg-cadastro-cartao')
    },

    enviarPedidoCarrinho: (req, res) => {
        servico = req.body
        req.session.servico = servico
        console.log(req.session.servico)
        res.render('pg-carrinho', {servico})
    }
}

module.exports = indexController