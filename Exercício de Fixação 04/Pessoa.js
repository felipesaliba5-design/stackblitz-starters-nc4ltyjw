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

    getNome(){
        return this.#nome;
    }

    setEmail(email) {
        if (email && String(email).trim() !== '' && String(email).includes('@')) {
            this.#email = String(email).trim();
            return true;
        }
        return false;
    }

    getEmail(){
        return this.#email;
    }
}

module.exports = Pessoa;