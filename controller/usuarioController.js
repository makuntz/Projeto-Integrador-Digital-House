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
        res.sendStatus(200)
    },

    login: async (req, res) => {
        const resposta = await Usuario.findAll()
        console.log('xablau')
        return res.json(resposta)
            
        // res.sendStatus(200)
        //res.render('card-login-e-registro')
    },

        //verificar a questao do banco
    // logar: (req, res) => { 
    //     const { email, senha } = req.body
    //     for (const user of bancoUser) {
    //         // if (user.email == email) {
    //         //     const resultadoSenha = bcrypt.compareSync(senha, user.senha)
    //         //     if (resultadoSenha == true) {
    //         //         return res.send("usuario logado")
    //         //     }
    //         // }
    //         const resultadoSenha = bcrypt.compareSync(senha, user.senha)
    //         if (user.email == email && resultadoSenha == true ) {
    //            // res.cookie('user',user.email )
    //             req.session.user = user.email   
    //             return res.send("usuario logado")
    //         }
    //     }
    //     return res.send("usario ou senha incorreto")
    //     },
    //     sobre: (req, res) => {
    //      return   res.render('usuario/sobre')
    //     }
     }


module.exports = usuarioController