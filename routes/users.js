var express = require( "express" );
var router = express.Router();
const usuarioController = require("../controller/usuarioController")


router.post('/cadastro', usuarioController.cadastroUsuario) //verificar a questao do banco no controller
router.get('/login',usuarioController.login )


module.exports = router;
