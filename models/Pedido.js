const Pedido = (sequelize, DataTypes)=>{
    let pedido = sequelize.define('Pedido',{
        Usuario_idusuario: DataTypes.INTEGER,
        Endereço_idEndereço: DataTypes.INTEGER

},{
    tableName:'pedido',
    timestamps:false
})
return pedido
}

module.exports = Pedido