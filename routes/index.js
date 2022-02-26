var express = require( "express" );
var router = express.Router();

var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')

router.get('/', indexController.home);

router.get('/produtos', indexController.produtos);

router.get('/carrinho', indexController.carrinho);

router.get('/pagamento', indexController.pagamento);


module.exports = router;