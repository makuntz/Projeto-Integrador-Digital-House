const Acompanhamento = (sequelize, DataTypes)=>{
    let acompanhamento = sequelize.define('Acompanhamento',{
       opcao:  DataTypes.STRING,
       valor: DataTypes.DECIMAL,
       status: DataTypes.TINYINT

},{
    tableName:'Acompanhamento',
    timestamps:false
})


return acompanhamento
}

module.exports = Acompanhamento