import React from 'react';
/*
Aqui se tu tentar entrar em uma rota que não existe ele aparace o erro da string
para testar escreva /nomedocomponente no final da url
exemplo: http://localhost:3000/contato
*/
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Esse é o home</p>
    </div>
  );
};

export default Home;
