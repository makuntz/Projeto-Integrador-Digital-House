const Endereco = (sequelize, DataTypes)=>{
    let endereco = sequelize.define('Endereco',{
       logradouro:  DataTypes.STRING,
       numero: DataTypes.INTEGER,
       bairro: DataTypes.STRING,
       cidade: DataTypes.STRING,
       uf: DataTypes.STRING,
       cep: DataTypes.INTEGER

},{
    tableName:'Endereco',
    timestamps:false
})


return endereco
}

module.exports = Endereco