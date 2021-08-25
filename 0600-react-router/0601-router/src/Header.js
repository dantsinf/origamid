import React from 'react';
/*
Aqui se tu tentar entrar em uma rota que não existe ele aparace o erro da string
para testar escreva /nomedocomponente no final da url
exemplo: http://localhost:3000/contato
*/
const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <p>Esse é o header</p>
    </div>
  );
};

export default Header;
