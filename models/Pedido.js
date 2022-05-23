const Pedido = (sequelize, DataTypes)=>{
    let pedido = sequelize.define('Pedido',{
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        idEndereço: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        idAcompanhamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        idBebida: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        idLanche: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },{
        tableName:'Pedido',
        timestamps:false
    })

    pedido.associate = (models => {
        pedido.belongsTo(models.Acompanhamento, {as: 'pedido_acompanhamento', foreignKey: 'idAcompanhamento'})
        pedido.belongsTo(models.Bebida, {as: 'pedido_bebida', foreignKey: 'idBebida'})
        pedido.belongsTo(models.Lanche, {as: 'lanche_bebida', foreignKey: 'idLanche'})
        pedido.belongsTo(models.Usuario, {as: 'usuario_bebida', foreignKey: 'idUsuario'})
        pedido.belongsTo(models.Endereco, {as: 'endereco_bebida', foreignKey: 'idEndereco'})
    })

    return pedido
}

module.exports = Pedido