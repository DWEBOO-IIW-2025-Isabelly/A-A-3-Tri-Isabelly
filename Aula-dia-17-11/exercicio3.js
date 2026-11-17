const ano = Number(prompt("Digite um ano:"));

const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log(`O ano ${ano} é bissexto? ${bissexto}`);

//2024: true (divisível por 4 e não por 100)

//1900: false (divisível por 100, mas não por 400)

//2000: true (divisível por 400)

//2026: false (não é divisível por 4)