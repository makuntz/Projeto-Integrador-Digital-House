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
return lanche
}

module.exports = Lanche