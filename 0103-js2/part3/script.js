/* 
//Fetch
//Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em 
//apis externas.
fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

*/

//Async / Await
// Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a
//promisse resolver, antes de continuar com o código.

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos('https://ranekapi.origamid.dev/wp-json/api/produto');
