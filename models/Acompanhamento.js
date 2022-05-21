const Acompanhamento = (sequelize, DataTypes)=>{
    let acompanhamento = sequelize.define('Acompanhamento',{
       nome:  DataTypes.STRING,
       valor: DataTypes.DECIMAL,
       Pedido_idPedido: DataTypes.INTEGER,
       Pedido_Usuario_idusuario: DataTypes.INTEGER

    },{
    tableName:'Acompanhamento',
    timestamps:false
    })

    acompanhamento.associate = (models) => {
        acompanhamento.belongsTo(models.Pedido, {as: 'acompanhamento_pedido', foreignKey: 'Pedido_idPedido'})
        //acompanhamento.belongsTo(models.Pedido, {as: 'acompanhamento_usuario'})
    }


return acompanhamento
}




module.exports = Acompanhamento