/* part1
const menu = {
  seletor: '.principal',
};
//tudo em javascript é objeto póis eu posso sempre acesar um médoto do mesmo
console.log(menu.seletor.toUpperCase());
*/

// CRIANDO FUNÇÃO
/*
function upperName() {
  return name.toUpperCase();
}

//sintaxe arrow function 
const lowerName = () => {

}
console.log(upperName('andré'));
*/

/*
//outra forma de criar uma função é criar uma expressão, que é algo que tu atribuir a uma variável
// ai tem função anônima
const upperName = (name) => {
  return name.toUpperCase();
};

console.log(upperName('andré'));
*/
/*
// encurtando a função, essa é uma das vantágens das arrow functions
const upperName = (name) => name.toUpperCase();

console.log(upperName('andré'));
*/

/*
//quando tu clica na tela aparece no console o evento
function handleMouse(event) {
  console.log(event);
}
document.addEventListener('click', handleMouse);
*/

//DESTRUCTION(vantagem do react)
/*
//função vai mostrar eixo x e eixo y em relação ao mouse
//sem a destruction tu teria que repetir varias vezes o "event", ma stirar informações do 
//objeto
function handleMouse(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);
*/

/* part1 com destruction
function handleMouse(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);
*/

/* part1.2 com destruction
function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);
*/

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

//Destructuring Arrays

// normal com arrays
const frutas = ['banana', 'uva'];
//aqui está na ordem do array
// as 2 frutas recebendo array
const [frutas1, frutas2] = frutas;
//console.log(frutas1);
//document.addEventListener('click', handleMouse);

// Aqui tu tens uma função que primeiro tem número de pois o valor
/*
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
// aqui é a função acima em destructuring
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));
document.addEventListener('click', handleMouse);
*/

// ################## Rest e Spread
// #### Rest
// looping nos clientes e colocar no console
/*
function showList(empresa, clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList('Google', ['André', 'Pedro']);
*/

//colocando as os nomes no Array cliente, ultilizou os "..."
/*
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}
showList('Google', 'André', 'Pedro', 'João');
*/

// #### Spread ou ...

/* part1
const maior = Math.max(10, 5, 20);
console.log(maior);
*/
//aqui um array
const numeros = [10, 5, 20];
//const maior = Math.max(numeros);
// com os 3 pontos tu passa um número de cada vez
const maior = Math.max(...numeros);
console.log(maior);

/*
//clonar array
const numeros2 = [...numeros];
console.log(numeros2);
*/

/*
// adicionando mais números
const numeros2 = [10, 12, ...numeros, 24, 32, 32];
console.log(numeros2);
*/

//com objeto
const carro = {
  cor: 'Azul',
  portas: 4,
};
//adicionando o ano
//carro.ano = 2020;
//console.log(carro);

//adicionando ano no Objeto
carroAno = { ...carro, ano: 2008 };
console.log(carroAno);
