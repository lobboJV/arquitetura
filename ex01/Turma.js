class Turma{
    #codigo
    #nota

    constructor(codigo, nota){
        this.#codigo = codigo
        this.#nota = nota
    }

    aprovadoNota() {
        return this.#nota >= 6;
    }

    getCodigo() {
        return this.#codigo
    }
    setCodigo(codigo){
        this.#codigo = codigo
    }

    getNota() {
        return this.#nota
    }
    setNota(nota){
        this.#nota = nota
    }
}

export { Turma }