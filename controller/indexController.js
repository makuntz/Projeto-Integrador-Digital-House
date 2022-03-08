

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
        res.render('pg-carrinho')
    },

    pagamento: (req, res) => {
        res.render('pg-pagamento')
    },

    login: (req, res) => {
        res.render('card-login-e-registro')
    },

    cadastroCartao: (req, res) => {
        res.render('pg-cadastro-cartao')
    }

}

module.exports = indexController