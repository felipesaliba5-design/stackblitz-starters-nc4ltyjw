

class CarteiraDigital{
     
    #titular;
    #saldo = 0;

    definirTitular(nome){
        this.#titular = nome;
    }

    consultarTitular() {
        let titularAtual = this.#titular;
        return titularAtual;
      }

      depositar(valor) {
        if (valor > 0) {
          this.#saldo += valor;
          console.log(`+ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        }
      }

      sacar(valor){
        if(valor <= 0){
          console.log('O valor de saque deve ser maior que zero.');
          return;
        }
        if (valor > this.#saldo) {
        console.log(`Saldo insuficiente R$ ${valor.toFixed(2)}.`);
        } 
        else {
        this.#saldo -= valor;
        console.log(`- Saque de R$ ${valor.toFixed(2)}`);
        }
      }

      consultarSaldo() {
        return this.#saldo;
      }

      exibirInformacoes() {
        console.log(`Titular: ${this.#titular}`);
        console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
      }
}

module.exports = CarteiraDigital;