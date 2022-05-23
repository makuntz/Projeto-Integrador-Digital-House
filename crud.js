//create 

const myFunction = async () => {
	const {sequelize, Acompanhamento} = require('./models/index.js');
	
	const novoAcompanhamento = await Acompanhamento.create({
	  	nome: "Batata Rustica Simples",
	  	valor: 21
	})
	return novoAcompanhamento
  }
  myFunction();


  