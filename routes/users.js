var express = require( "express" );
var router = express.Router();
const usuarioController = require("../controller/usuarioController")


router.post('/cadastro', usuarioController.cadastroUsuario) 
router.post('/login',usuarioController.login)


module.exports = router;
