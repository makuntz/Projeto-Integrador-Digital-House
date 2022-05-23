const Usuario = (sequelize, DataTypes)=>{
    let usuario = sequelize.define('Usuario',{
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        nome:  {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },

        telefone: {
            type: DataTypes.BIGINT,
            allowNull: false
        }

    },{
        tableName:'Usuario',
        timestamps:false
    })

    usuario.associate = (models => {
        usuario.hasMany(models.Pedido, {as: 'usuario_pedido', foreignKey: 'idUsuario'})
    })

    return usuario
}

module.exports = Usuario