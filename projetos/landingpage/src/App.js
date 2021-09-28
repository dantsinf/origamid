import React from 'react';
import './App.css';
import Conteudo from './Conteudo';
import Header from './Header';

function App({ nome }) {
  const [cont, setCont] = React.useState(0);
  const [msgpedido, setMsgpedido] = React.useState('');

  function handleChannge() {
    setCont(cont + 1);
  }

  function handleAlertClick() {
    <h1>hgjh: {nome}</h1>;
    setTimeout(() => {
      alert('Você adicionou um sorvete ');
    }, 3000);
  }

  return (
    <div className="App">
      <Header cont={cont} handleAlertClick={handleAlertClick} />
      <Conteudo
        handleAlertClick={handleAlertClick}
        handleChannge={handleChannge}
      />
    </div>
  );
}

export default App;
