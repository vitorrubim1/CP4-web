// 1.
const alunos = [
    {
        nome: "Vitor", 
        estudando: true
    }, 
    {
        nome: "Natan", 
        estudando: true
    }, 
    {
        nome: "Gustavo", 
        estudando: false
    }
];

const escola = {
    curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    alunos: alunos,
    professor: "Welligton",
    turma: "1TDSPR",
    periodo: "Noite",
}

// a. Crie um método telaaluno estudando e apresente na tela
const alunosEstudando = escola.alunos.filter(item => item.estudando);

/*
    Output: [
        {
            "nome": "Vitor",
            "estudando": true
        },
        {
            "nome": "Natan",
            "estudando": true
        }
    ]
*/

// b. 
const aluno = alunos.find(item => item.nome === "Vitor");

/*
    Output: {
        "nome": "Vitor",
        "estudando": true
    }
*/

// 2.
const funcionarios = [
    { 
        nome: "Gustavo", 
        idade: 25, 
        sexo: "Masculino", 
        cargo: "Contador", 
        salario: 1.500, 
        descontos: 200, 
        dataAdmissao: new Date('1995-12-17'), 
        dataDemissao: new Date("2012-12-21") 
    },
    { 
        nome: "Natan", 
        idade: 23, 
        sexo: "Masculino", 
        cargo: "Garçom", 
        salario: 1.800, 
        descontos: 250, 
        dataAdmissao: new Date('2005-03-17'), 
        dataDemissao: new Date("2007-09-21") 
    },
    { 
        nome: "Gabriela", 
        idade: 23, 
        sexo: "Feminino", 
        cargo: "Secretária", 
        salario: 2.000, 
        descontos: 180, 
        dataAdmissao: new Date('2014-03-01'), 
        dataDemissao: new Date("2020-07-12")  
    },
];

// a.
const admitidos = funcionarios.filter(item => item.dataAdmissao.getFullYear() >= 2000 || item.dataAdmissao.getFullYear() >= 2010);

/*
    Output: [
        {
            "nome": "Natan",
            "idade": 23,
            "sexo": "Masculino",
            "cargo": "Garçom",
            "salario": 1.8,
            "descontos": 250,
            "dataAdmissao": "2005-03-17T00:00:00.000Z",
            "dataDemissao": "2007-09-21T00:00:00.000Z"
        },
        {
            "nome": "Gabriela",
            "idade": 23,
            "sexo": "Feminino",
            "cargo": "Secretária",
            "salario": 2,
            "descontos": 180,
            "dataAdmissao": "2014-03-01T00:00:00.000Z",
            "dataDemissao": "2020-07-12T00:00:00.000Z"
        }
    ]
*/

// b.
const demitidos = funcionarios.filter(item => item.dataDemissao.getFullYear() >= 2018);

/*
    Output: [
        {
            "nome": "Gabriela",
            "idade": 23,
            "sexo": "Feminino",
            "cargo": "Secretária",
            "salario": 2,
            "descontos": 180,
            "dataAdmissao": "2014-03-01T00:00:00.000Z",
            "dataDemissao": "2020-07-12T00:00:00.000Z"
        }
    ]
*/

// c.
const funcionario = funcionarios.map(item => {
    return {
        nome: item.nome,
        salario: item.salario,
        desconto: item.descontos
    }
});

/*
    Output: [
        {
            "nome": "Gustavo",
            "salario": 1.5,
            "desconto": 200
        },
        {
            "nome": "Natan",
            "salario": 1.8,
            "desconto": 250
        },
        {
            "nome": "Gabriela",
            "salario": 2,
            "desconto": 180
        }
    ]
*/

// d.
const totalDesconto = funcionarios.reduce(
    (accumulator, currentValue) => accumulator + currentValue.descontos,
    0
);

/* Output: 630 */

// 3.

// a.
function soma (a, b, c) {
    return (a + b) / c;
}

// b. apresente agora com o mesmo exemplo crie uma Arrow function para apresentar o mesmo resultado
const somaHeroFunction = (a, b, c) => {
    return (a + b) / c;
}

soma(5, 5, 2);
somaHeroFunction(5, 5, 2)

// Output: 5

//4.
document.write(`<h3>Total de Cliques:</h3>`)
document.write(`<button onclick="contarCliques(); contarCliquesHeroFunction()">Clique aqui!</button>
<div id="resultado"></div><div id="resultadoHeroFunction"></div>`)

let totalCliques = 0;

function contarCliques() {
  totalCliques++;
  document.getElementById("resultado").innerHTML = `Função Tradicional: O total de cliques no botão foi de ${totalCliques} vezes.`;
}

let totalCliquesHeroFunction = 0;

const contarCliquesHeroFunction = () => {
  totalCliquesHeroFunction++;
  document.getElementById("resultadoHeroFunction").innerHTML = `Arrow Function: O total de cliques no botão foi de ${totalCliquesHeroFunction} vezes.`;
}

// 5.
function media (nota1, nota2, nota3, nota4, nota5, nota6, nota7) {
    const sum = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

    if (sum >= 6) return "Você foi aprovado"

    return "Você foi reprovado"
}

media(10, 5, 2, 3, 4, 10, 1)

// Output: Você foi reprovado

// 6.
function login(username, senha) {
    if (username === "admin" && senha === "1234") return "Login realizado com sucesso!";
    
    return "Falha na autenticação";
}

login("admin", "1234")

// Output: Login realizado com sucesso!

// 7.
function exibeFaixaEtaria(idade) {
    if (idade <= 12) return "Criança";
    if (idade <= 18) return "Adolescente";
    if (idade <= 60) return "Adulto";
    if (idade > 60) return "Idoso";
}

exibeFaixaEtaria(61)

// Output: Idoso

function imparOuPar(numero) {
    if (numero % 2 === 0) return "O número é par"
    else return "O número é impar";
}

imparOuPar(6)

// Output: O número é par
