//Aula 03 - Operadores Aritmétricos

let num=0;
num = num + 1;
console.log('O número agora vale ',num);
num = num - 1;
console.log('O número agora vale ',num);
num = num * 2;
console.log('O número agora vale ', num);
num = num / 2;
console.log('O número agora vale ', num);
num = num - 1;
console.log('O número agora vale ', num);


//Forma curta/abreviada ou atalho
num += 5;
console.log('O número agora vale ', num);

let msn = 'Lista de compras:';
msn += '\n Alface';
msn += '\n Alcool';
msn += '\n Fósforo';
msn += '\n Braçadeiras';
msn += '\n Fita';
msn += '\n Materiais para os aluno de IIW-2025';
console.log(msn);

//Operadores lógicos 
//const conceito  = 'A';

//const aprovado = nota >= 6;
//console.log(aprovado);


//console.log(5 === '5');
//console.log(5 == '10');
//console.log(0 == '');
//console.log(0 == false);*/

//Operadores lógicos
//&& - E (AND)
// || - OU (OR)
// ! - NÃO (NOT)

let media = 8.0;
let frequencia = 8.0;
const aprovadoPorNota = media >=6;
const aprovadoPorFrquencia = frequencia >=75;
const aprovado = aprovadoPorNota && aprovadoPorFrquencia;
console.log('Aprovado? ${aprovado}');
//Tarefa 1 - converter código acima em uma única linha...

