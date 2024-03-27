class Aluno {
    constructor(nome, login, ra){
        this.nome = nome
        this.login = login
        this.ra = ra
    }
    
    getNome() {
        return this.nome
    }
    setNome(nome){
        this.nome = nome
    }

    getLogin() {
        return this.login
    }
    setLogin(login){
        this.login = login
    }

    getRa() {
        return this.ra
    }
    setRa(ra){
        this.ra = ra
    }
}

export { Aluno }