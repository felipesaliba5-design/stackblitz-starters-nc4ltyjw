const Pessoa = require('./Pessoa');

class Aluno extends Pessoa{
    #matricula;

    setMatricula(matricula) {
        
        const matLimpa = String(matricula).trim();
        
        if (matLimpa !== '' && matLimpa.length >= 6) {
            this.#matricula = matLimpa;
            return true;
        }
        return false;
    }

    getMatricula (){
        return this.#matricula;
    }
}
module.exports = Aluno;