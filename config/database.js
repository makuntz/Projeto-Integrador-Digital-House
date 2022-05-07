const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', '123456pswd', {
    dialect: 'mysql', 
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;

//crud deve ser substituido pelo nome do BD, root é o user do BD e 123456pswd é a senha do BD