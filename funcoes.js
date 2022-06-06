
module.exports = {
	nomeProduto: function (codigo) {
		switch (codigo) {
			case 'l1':
				return "BIG HEAT  -  R$ 22,00";
			case 'l2':
				return "HEAT BURGUER SIMPLES  -  R$ 24,00";
			case 'l3':
				return "HEAT BURGUER DUPLO  -  R$ 27,00";
			case 'l4':
				return "HEAT BURGUER TRIPLO  -  R$ 31,00";
			case 'a1':
				return "BATATA RUSTICA SIMPLES - R$ 21,00";
			case 'a2':
				return "FRITAS PALITO SIMPLES - R$ 18,00";
			case 'a3':
				return "FRITAS PALITO CHEDDAR - R$ 22,00";
			case 'b1':
				return "COCA COLA - R$ 5,00";
			case 'b2':
				return "GUARANA - R$ 5,00";
			case 'b3':
				return "SUCO DE LARANJA - R$ 8,00";
		}
	},
	precoProduto: function (codigo) {
		switch (codigo) {
			case 'l1':
				return 22.00;
			case 'l2':
				return 24.00;
			case 'l3':
				return 27.00;
			case 'l4':
				return 31.00;
			case 'a1':
				return 21.00;
			case 'a2':
				return 18.00;
			case 'a3':
				return 22.00;
			case 'b1':
				return 5.00;
			case 'b2':
				return 5.00;
			case 'b3':
				return 8.00;
		}
		return 0;
	},
	dinheiro: function (valor) {
		return `R$ ${(Math.round(valor * 100) / 100).toFixed(2)}`;
	}
}