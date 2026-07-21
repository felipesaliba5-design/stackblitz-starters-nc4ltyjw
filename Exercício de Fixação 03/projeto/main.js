const CarteiraDigital = require('./carteiraDigital');

const carteira = new CarteiraDigital();

carteira.definirTitular('Felipe V');

carteira.depositar(200);

console.log(`Saldo consultado: R$ ${carteira.consultarSaldo().toFixed(2)}`);

carteira.sacar(50);

console.log(`Saldo após saque: R$ ${carteira.consultarSaldo().toFixed(2)}`);

carteira.sacar(500);

carteira.exibirInformacoes();