const bcrypt = require('bcrypt');


function logar(login,senha){


//---------Quando o usuario tenta fazer o login

//compara a senha com o hash salvo no banco
const resultado = bcrypt.compareSync(senha,hashBanco)
 console.log(resultado)
}

logar()

module.exports = logar