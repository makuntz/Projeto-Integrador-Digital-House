const Pedido = (sequelize, DataTypes)=>{
    let pedido = sequelize.define('Pedido',{
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        idEndereço : DataTypes.INTEGER,
        idAcompanhamento: DataTypes.INTEGER,
        idBebida: DataTypes.INTEGER,
        idLanche: DataTypes.INTEGER,
        idUsuario: DataTypes.INTEGER

},{
    tableName:'Pedido',
    timestamps:false
})

pedido.associate = (models => {
    pedido.belongsTo(models.Acompanhamento, {as: 'pedido_acompanhamento', foreignKey: 'idAcompanhamento'})
})

return pedido
}

module.exports = Pedido