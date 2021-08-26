import React from 'react';
import { NavLink } from 'react-router-dom';
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
      {/*{' '} é o espaço entre notebook e smatphone*/}
      <NavLink to="produto/notebook">Notebook</NavLink>{' '}
      <NavLink to="produto/smartphone">Smartphone</NavLink>
    </div>
  );
};

export default Home;
