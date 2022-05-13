const Bebida = (sequelize, DataTypes)=>{
    let bebida = sequelize.define('Bebida',{
       opcao:  DataTypes.STRING,
       valor: DataTypes.DECIMAL,
       status: DataTypes.TINYINT

},{
    tableName:'Bebida',
    timestamps:false
})


return bebida
}

module.exports = Bebida