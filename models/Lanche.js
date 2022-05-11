const Sequelize = require('sequelize');
const database = require('../config/config.json');


const Lanche = (sequelize, DataTypes)=>{
    let lanche = sequelize.define('lanche', {    
    id:{  
        type: Sequelize.INTEGER,        
        autoIncrement: true,        
        allowNull: false,        
        primaryKey: true    },    
    
    nome: {        
        type: Sequelize.STRING,        
        allowNull: false    },    

    preco: Sequelize.DECIMAL,    

    descricao: Sequelize.STRING})
}

    module.exports = Lanche