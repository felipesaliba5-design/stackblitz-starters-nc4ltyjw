class Pessoa{
    #nome;
    #email;

    setNome(nome){
        if(nome && nome.trim()!==''){
            this.#nome = nome;
            return true;
        }
        return false
    }

    getName(){
        return this.#nome;
    }

    setEmail(email){
        if(email && email.trim()!==''){
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail(){
        return this.#email;
    }
}

module.exports = Pessoa;