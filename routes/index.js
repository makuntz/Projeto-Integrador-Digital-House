var express = require( "express" );
var router = express.Router();

var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')
const validaUsuarioLogado = require('../middleware/validarUsuarioLogado')
router.get('/', indexController.home);


router.get('/produtos1', validaUsuarioLogado, indexController.produtos);

router.get('/carrinho', indexController.carrinho);

router.get('/pagamento', indexController.pagamento);

router.get('/login', indexController.login);

router.get('/cartao', indexController.cadastroCartao);

router.post('/carrinho', indexController.enviarPedidoCarrinho)



module.exports = router;