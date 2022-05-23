

const Acompanhamento = (sequelize, DataTypes)=>{
    let acompanhamento = sequelize.define('Acompanhamento',{
        idAcompanhamento: {
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
        tableName:'Acompanhamento',
        timestamps:false
    })

    acompanhamento.associate = (models => {
        acompanhamento.hasMany(models.Pedido, {as: 'acompanhamento_pedido', foreignKey: 'idAcompanhamento'})
    })


    return acompanhamento
}




module.exports = Acompanhamento