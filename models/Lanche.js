const Lanche = (sequelize, DataTypes)=>{
    let lanche = sequelize.define('Lanche',{
        opcao:  DataTypes.STRING,
        valor: DataTypes.DECIMAL,
        status: DataTypes.TINYINT,
        Pedido_idPedido: DataTypes.INTEGER,
        Pedido_Usuario_idusuario: DataTypes.INTEGER

},{
    tableName:'Lanche',
    timestamps:false
})
return lanche
}

module.exports = Lanche