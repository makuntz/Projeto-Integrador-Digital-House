const Usuario = (sequelize, DataTypes)=>{
    let usuario = sequelize.define('Usuario',{
       nome:  DataTypes.STRING,
       email: DataTypes.STRING,
       senha: DataTypes.STRING,
       telefone: DataTypes.BIGINT,
       Pedido_idPedido: DataTypes.INTEGER,
       Pedido_Usuario_idusuario: DataTypes.INTEGER,
       Pedido_Endereço_idEndereço: DataTypes.INTEGER

},{
    tableName:'Usuario',
    timestamps:false
})
return usuario
}

module.exports = Usuario