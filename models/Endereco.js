const Endereco = (sequelize, DataTypes)=>{
    let endereco = sequelize.define('Endereco',{
        idEndereco: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        logradouro:  {
           type: DataTypes.STRING,
           allowNull: false
        },

        numero: {
           type: DataTypes.INTEGER,
           allowNull: false
        
        },

        bairro: {
           type: DataTypes.STRING,
           allowNull: false
        },

        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },

        uf: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        cep: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },{
        tableName:'Endereco',
        timestamps:false
    })

    endereco.associate = (models => {
        endereco.hasOne(models.Pedido, {as: 'endereco_pedido', foreignKey: 'idEndereco'})
    })


    return endereco
}

module.exports = Endereco