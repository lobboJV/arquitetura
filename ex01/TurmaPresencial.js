import { Turma } from "./Turma.js"

class TurmaPresencial extends Turma{

    #frequencia

    constructor(codigo, nota, frequencia){
        super(codigo, nota)
        this.#frequencia = frequencia
    }

    getFrequencia() {
        return this.#frequencia
    }
    setFrequencia(frequencia){
        this.#frequencia = frequencia
    }

    aprovado() {
        return super.aprovadoNota() && this.#frequencia >= 75;
    }
}

export { TurmaPresencial }