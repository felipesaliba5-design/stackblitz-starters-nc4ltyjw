const Professor = require('./Professor');

class coordenador extends Professor{

#setor

    setSetor(setor){
        if (setor && String(setor).trim() !== '') {
            this.#setor = String(setor).trim();
            return true;
        }
        return false;
    }

    getSetor() {
        return this.#setor;
    }   
}

module.exports = coordenador;