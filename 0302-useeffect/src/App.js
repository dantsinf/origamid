import React from 'react';

/* #################### useEffect
Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.
*/

// part1
/*
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  });

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
*/

/*
Array de Dependências
No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.
*/

/* part 2
const App = () => {
  const [contar, setContar] = React.useState(0);
  // Ter array vazia indica que o efeito não tem depenência e o efeito só icicia após a renderização
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
    // a dependência está no contar, quando le atualizar o useEffetc/efeito vai ativa
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
*/

// part 3

/*
Dependências Obrigatórias
Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.
*/
/*
const App = () => {
  const [contar, setContar] = React.useState(0);

  const titulo = 'Clicou ';

  React.useEffect(() => {
    //o título da página mostra o contador
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, [contar]);
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
*/

/**
Componente Montou
O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
 */

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
