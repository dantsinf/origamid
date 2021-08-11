//componente sempre com caixa alta
// a vantagem do webpack é não colocar tudo no arquivo js
// sempre no compornete tu tens que importar o react

import React from 'react';
import './App.css';

const App = () => {
  return <a href="https://www.origamid.com">Origamid</a>;
};

//tu precisa sempre dizer o que tu está importando
// por padrão tu vai sempre exportar o App
export default App;
