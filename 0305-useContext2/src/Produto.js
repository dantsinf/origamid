/*useContext
O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.*/

import React from 'react';
import { GlobalContext } from './GlobalStorage';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};

export default Produto;
