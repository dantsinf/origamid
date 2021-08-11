import React from 'react';

/* part1 com form
const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};
*/

/* part2 mostrando o nome
const App = () => {
  const nome = 'Andre';
  return <p>{nome}</p>;
};
*/

/* part3
const App = () => {
  const ativo = false;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};
*/

/* part4
const Titulo = <h1>Meu título</h1>;

const App = () => {
  return <div>{Titulo}</div>;
};
*/

const App = () => {
  function meuNome(sobrenome) {
    return 'André' + sobrenome;
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p style={estiloP}>{meuNome(' Rafa')}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};

export default App;
