function logCurso() {
    const nome = 'JavaScript';
    console.log(nome);
}
logCurso();

function testeParametro(parametro) {
    console.log(parametro);
}
testeParametro('Eduardo');

function testeParametro_1(parametro, horas) {
    console.log(parametro, horas, "horas");
}
testeParametro_1('Eduardo', 10);


function testeParametro_2(nome, horas) {
    console.log(nome, horas, "horas");
    return nome + ' Log';
}
testeParametro_2('Eduardo', 20);


function testeParametro_3(nome, horas) {
    console.log(nome, horas, "horas");
    /* retorna objeto */
    return {nomeTeste: nome, 
            horasTeste: horas,
            };
}
testeParametro_3('Eduardo', 25);


/* ESCOPO DA FUNCAO, VC N ACESSA A VARIAVEL DECLARADA NO ESCOPO DA FUNCAO */
const nome = "Eduardo";

function testeFunction() {
    const nome = "Eduardo";
    console.log(nome);
/* caso eu queira ter acesso a variável de dentro da funçaõ devo declarar no return */
}

testeFunction();