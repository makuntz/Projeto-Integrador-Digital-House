const Usuario = (sequelize, DataTypes)=>{
    let usuario = sequelize.define('Usuario',{
       nome:  DataTypes.STRING,
       sobrenome: DataTypes.STRING,
       email: DataTypes.STRING,
       celular: DataTypes.BIGINT

},{
    tableName:'Usuario',
    timestamps:false
})
return usuario
}

module.exports = Usuario