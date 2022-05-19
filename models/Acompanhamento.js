const Acompanhamento = (sequelize, DataTypes)=>{
    let acompanhamento = sequelize.define('Acompanhamento',{
       opcao:  DataTypes.STRING,
       valor: DataTypes.DECIMAL,
       status: DataTypes.TINYINT,
       Pedido_idPedido: DataTypes.INTEGER,
       Pedido_Usuario_idusuario: DataTypes.INTEGER

},{
    tableName:'Acompanhamento',
    timestamps:false
})


return acompanhamento
}

module.exports = Acompanhamento