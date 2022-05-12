const bcrypt = require('bcrypt');


function logar(login,pswd){


//---------Quando o usuario tenta fazer o login

//compara a senha com o hash salvo no banco
const resultado = bcrypt.compareSync(pswd,Usuario)
 console.log(resultado)
}

logar()

module.exports = logar