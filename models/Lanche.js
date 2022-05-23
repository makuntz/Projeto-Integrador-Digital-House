const Lanche = (sequelize, DataTypes)=>{
    let lanche = sequelize.define('Lanche',{
        idLanche: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        valor:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },{
        tableName:'Lanche',
        timestamps:false
    })

    lanche.associate = (models => {
        lanche.hasMany(models.Pedido, {as: 'lanche_pedido', foreignKey: 'idLanche'})
    })
    return lanche
}

module.exports = Lanche