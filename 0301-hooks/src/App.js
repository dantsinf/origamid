import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

/*
const App = () => {
  const ativo = false;
  //vai estar desabilitado de o ativo estiver false;
  return <button disabled={!ativo}>{ativo ? 'Operando' : 'Off'}</button>;
};
*/

/* eventos
const App = () => {
  const ativo = true;
  function handleClick() {}
  return <button disabled={!ativo}>{ativo ? 'Operando' : 'Off'}</button>;
};
*/

/*
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
};
*/

const App = () => {
  const [cont, setCont] = useState(0);
  return (
    <React.Fragment>
      <h2>Contador</h2>
      <button onClick={() => setCont(cont + 1)}>Clique aqui{cont}</button>
    </React.Fragment>
  );
};

export default App;
