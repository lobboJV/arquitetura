import { Aluno } from "./Aluno.js"
import { TurmaPresencial } from "./TurmaPresencial.js"

//Insira os valores que deseja
let aluno = new Aluno("João","djwand", "a2350610")
let turma = new TurmaPresencial("es32", 8, 76)

console.log(`Nome: ${aluno.getNome()}\n`)
console.log(`Login: ${aluno.getLogin()}\n`)
console.log(`RA: ${aluno.getRa()}\n`)

console.log(`Codigo: ${turma.getCodigo()}\n`)
console.log(`Nota: ${turma.getNota()}\n`)

console.log(`Frequencia: ${turma.getFrequencia()}%\n`)

if(turma.aprovado())
    console.log("Resultado: Aluno aprovado!\n")
else
    console.log("Resultado: Aluno reprovado!\n")