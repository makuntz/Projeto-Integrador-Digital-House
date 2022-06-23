const Pedido = (sequelize, DataTypes)=>{
    let pedido = sequelize.define('Pedido',{
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        acompanhamento: {
            type: DataTypes.STRING,
            allowNull: false
        },

        bebida: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        valor: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },{
        tableName:'Pedido',
        timestamps:false
    })

    // pedido.associate = (models => {
    //     pedido.belongsTo(models.Acompanhamento, {as: 'pedido_acompanhamento', foreignKey: 'idAcompanhamento'})
    //     pedido.belongsTo(models.Bebida, {as: 'pedido_bebida', foreignKey: 'idBebida'})
    //     pedido.belongsTo(models.Lanche, {as: 'lanche_bebida', foreignKey: 'idLanche'})
    //     pedido.belongsTo(models.Usuario, {as: 'usuario_bebida', foreignKey: 'idUsuario'})
    //     pedido.belongsTo(models.Endereco, {as: 'endereco_bebida', foreignKey: 'idEndereco'})
    // })

    return pedido
}

module.exports = Pedido