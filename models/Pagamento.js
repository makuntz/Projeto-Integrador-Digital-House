const Pagamento = (sequelize, DataTypes)=>{
    let pagamento = sequelize.define('Pagamento',{
       opcao:  DataTypes.STRING,

},{
    tableName:'Pagamento',
    timestamps:false
})


return pagamento
}

module.exports = Pagamento