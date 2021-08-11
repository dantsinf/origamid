const grupoA = 100;
const grupoB = 300;

/*
if (grupoA > grupoB) {
  console.log('Grupo A, ganhou');
} else {
  console.log('Grupo B, ganhou');
}
*/

const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);

const active = true;
const button = active && 'Botão está ativo';
