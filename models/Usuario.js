const Usuario = (sequelize, DataTypes)=>{
    let usuario = sequelize.define('Usuario',{
       nome:  DataTypes.STRING,
       email: DataTypes.STRING,
       senha: DataTypes.STRING,
       telefone: DataTypes.BIGINT

},{
    tableName:'Usuario',
    timestamps:false
})
return usuario
}

module.exports = Usuario