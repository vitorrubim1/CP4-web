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
    curso: "ADS",
    alunos: alunos,
    professor: "Welligton",
    turma: "1TDSPR",
    periodo: "Noite",
}

// a.
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
