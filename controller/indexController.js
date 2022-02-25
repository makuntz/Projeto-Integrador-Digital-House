

const indexController = {
    home: (req, res) => {
        res.render('pg-home')
    },

    produtos: (req, res) => {
        res.render('pg-produtos')
    },

    carrinho: (req, res) => {
        res.render('pg-carrinho')
    },

    pagamento: (req, res) => {
        res.render('pg-pagamento')
    }

}

module.exports = indexController