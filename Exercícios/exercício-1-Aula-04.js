let conceitos = [];
let frequencias = [];

for (let i = 1; i <= 3; i++) {
  let conceito = prompt(`Digite o conceito do ${i}º trimestre (A, B, C ou D):`).toUpperCase().trim();
  let frequencia = parseFloat(prompt(`Digite a frequência (%) do ${i}º trimestre (0 a 100):`));

  conceitos.push(conceito);
  frequencias.push(frequencia);
}

let somaFrequencia = frequencias[0] + frequencias[1] + frequencias[2];
let mediaFrequencia = somaFrequencia / 3;

let conceitoFinal = conceitos[2];
let frequenciaAprovada = mediaFrequencia >= 75;
let conceitoAprovado = ["A", "B", "C"].includes(conceitoFinal);

let mensagem = `--- Resultado Final em LAEC ---\n`;
mensagem += `Conceitos: ${conceitos.join(" | ")}\n`;
mensagem += `Frequência Média: ${mediaFrequencia.toFixed(1)}%\n\n`;

if (frequenciaAprovada && conceitoAprovado) {
  mensagem += `Situação: Aprovado(a)!`;
} else {
  mensagem += `Situação: Reprovado(a).\n`;
  if (!frequenciaAprovada) mensagem += `Motivo: Frequência inferior a 75%\n`;
  if (!conceitoAprovado) mensagem += `Motivo: Conceito final insuficiente (${conceitoFinal}).`;
}

alert(mensagem);
console.log(mensagem);