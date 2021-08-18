// ############# useContext
/*
Provider
O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto.
*/
import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalStorage';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
