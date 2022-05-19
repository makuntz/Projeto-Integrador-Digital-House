const Bebida = (sequelize, DataTypes)=>{
    let bebida = sequelize.define('Bebida',{
       opcao:  DataTypes.STRING,
       valor: DataTypes.DECIMAL,
       status: DataTypes.TINYINT,
       Pedido_idPedido: DataTypes.INTEGER,
       Pedido_Usuario_idusuario: DataTypes.INTEGER

},{
    tableName:'Bebida',
    timestamps:false
})


return bebida
}

module.exports = Bebida