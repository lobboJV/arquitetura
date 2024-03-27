// Componente base (interface)
class FuncionarioComponente {
    calcularSalario() {}
}

// Funcionário individual
class Funcionario extends FuncionarioComponente {
    constructor(nome, salario) {
        super();
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }
}

// Departamento (que pode conter funcionários ou outros subdepartamentos)
class Departamento extends FuncionarioComponente {
    constructor(nome) {
        super();
        this.nome = nome;
        this.componentes = [];
    }

    adicionar(componente) {
        this.componentes.push(componente);
    }

    remover(componente) {
        const index = this.componentes.indexOf(componente);
        if (index !== -1) {
            this.componentes.splice(index, 1);
        }
    }

    calcularSalario() {
        let salarioTotal = 0;
        for (const componente of this.componentes) {
            salarioTotal += componente.calcularSalario();
        }
        return salarioTotal;
    }
}

// Exemplo de uso
const funcionario1 = new Funcionario("João", 3500);
const funcionario2 = new Funcionario("Maria", 6000);

const departamento1 = new Departamento("Vendas");
const departamento2 = new Departamento("TI");

departamento1.adicionar(funcionario1);
departamento2.adicionar(funcionario2);

const salarioTotalOrganizacao = departamento1.calcularSalario() + departamento2.calcularSalario();
console.log(`Salário total da organização: ${salarioTotalOrganizacao}`);