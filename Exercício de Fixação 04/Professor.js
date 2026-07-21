const Pessoa = require('./Pessoa');

class Professor extends Pessoa{

    #disciplina

    setDisciplina(diciplina){
        if(diciplina && String(diciplina).trim()!==''){
            this.#disciplina = matricula;
            return true;
        }
        return false;
    }

    getDisciplina(){
        return this.#disciplina;
    }
}

module.exports = Professor;