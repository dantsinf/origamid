import React from 'react';
import Input from './Form/Input';

const App = () => {
  //envio do formulário
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
