const Bebida = (sequelize, DataTypes)=>{
    let bebida = sequelize.define('Bebida',{
        idBebida: {
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
    tableName:'Bebida',
    timestamps:false
})


return bebida
}

module.exports = Bebida