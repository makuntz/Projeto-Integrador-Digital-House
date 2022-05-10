const bcrypt = require('bcrypt');
const saltRounds = 10;
const {sequelize, Usuario} = require('../models/index')
//const {Op} = require('sequelize')

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
    },

    login: async (req, res) => { 
        const { email, pswd} = req.body
        const user = await Usuario.findOne({ where: { email: email } });
        if (user === null) {
            res.send('Usuario nao logado');
        } else {
            const resultadoSenha = bcrypt.compareSync(pswd, user.senha)
            if(resultadoSenha){
                res.send('usuario logado')
            }
        }   
    }
    
    
    }


module.exports = usuarioController