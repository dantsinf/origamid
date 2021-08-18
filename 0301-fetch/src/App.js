import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';
//###### 0301 - usaState1

/* botão hanilitado e desabilitado
const App = () => {
  const ativo = false;
  return (
    <>
      <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  );
};
*/

/*
const App = () => {
  //let pois a const(constante) não deixa alterar o valor após interir um.
  let ativo = true;

  function handleClick() {
    ativo = !ativo;
    //aqui vai ficar alternando entre false e true
    console.log(ativo);
  }
  */

//######################### HOOKS

/* part1
const App = () => {
  //aqui uma array 
  //{variavel,função}
  //ativo é uma variável
  //setAtivo é uma função
  const [ativo, setAtivo] = React.useState(true);

  return (
    <>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Ativo' : 'Inativo'}
      </button>
    </>
  );
};
*/

/*
//versão estruturada
const App = () => {
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  console.log(ativoValor);

  function handleClick() {
    atualizaValor(!ativoValor);
  }

  return (
    <>
      <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>
    </>
  );
};
*/

/*
const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Sofia', idade: '30' });

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      </div>
    </>
  );
};
*/

/*
// usamos Spread(adiciona valor na array)
//resultado: mostra dados e quando clica no botão aparece o adicionado com Spread
const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Sofia', idade: '30' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' });
  }

  return (
    <>
      <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      </div>
    </>
  );
};
*/

/*
//resultado: aperta no botão aparece dados, aperta em outro ele fecha dados
const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      //escrever o nome do componente e apertar tab importa ele
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};
*/

/*
// Reatividade
//resultado: 2 botoes, 1 adicion informações quando tu clica
const App = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
};
*/

/*
// CallBack
const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};
*/

/*
// Callback no estado inicial
const App = () => {
  // Callback no estado inicial, só será executado na criação do componente
  const [ativo, setAtivo] = React.useState(() => {
    const ativoLocal = window.localStorage.getItem('ativo');
    return ativoLocal;
  });

  function handleClick() {
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};
*/

//React.StrictMode repete 2x a renderização e isso afeta o projeto
// ela entra na lista de funções coláterais(side effects)
//identificamos esse tipo de função e eliminamos elas
// aqui trocamos React.StrictMode por <> </>
const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      setItems((items) => [...items, 'Item ' + (contar + 1)]);
      return contar + 1;
    });
    // Tirar o efeito de dentro do setContar irá concertar o erro
    // setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
