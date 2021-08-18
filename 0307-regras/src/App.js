// Regras
/*Top Level
Não utilize os hooks dentro de funções, loops ou condicionais.*/
import React from 'react';

const App = () => {
  // Correto
  React.useEffect(() => {
    document.title = 'Título novo';
  }, []);

  let condicao = true;
  if (condicao) {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  function mudarTitulo() {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  for (let i = 0; i < 10; i++) {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  return <div></div>;
};

export default App;
