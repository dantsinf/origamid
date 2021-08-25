/*
404 - Não Encontrado
O * renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe.

Aqui se tu tentar entrar em uma rota que não existe ele aparace o erro da string
para testar escreva /nomedocomponente no final da url
exemplo: http://localhost:3000/contato

*/

import React from 'react';

const NaoEncontrado = () => {
  return (
    <div>
      <p>ERRO: 404 - Página não encontrada</p>
    </div>
  );
};

export default NaoEncontrado;
