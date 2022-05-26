const bcrypt = require('bcrypt');
const saltRounds = 10;
const {sequelize, Usuario} = require('../models/index');


const usuarioController = {
    cadastroUsuario: (req, res) => {
        const { txt, email, pswd, tel} = req.body
        const hash = bcrypt.hashSync(pswd, saltRounds);
        const criarUsuario = async () => {
            const user = await Usuario.create({
                nome: txt,
                email: email,
                senha: hash,
                telefone: tel
            })
        }
        criarUsuario()
        console.log('xablauuu')
        res.redirect('/')
    },

    login: async (req, res) => { 
        const { email, pswd} = req.body
        const user = await Usuario.findOne({ where: { email: email } });
        if (user === null) {
            res.redirect('/users/naologado')
        } else {
            const resultadoSenha = bcrypt.compareSync(pswd, user.senha)
            if(resultadoSenha && email == user.email){
                req.session.user = email
                res.redirect('/produtos1')
                console.log(req.session)
            }
        }   
    },

    naoLogado: (req, res) => {
        res.render('usuarioNaoLogado')
    }

}


module.exports = usuarioController