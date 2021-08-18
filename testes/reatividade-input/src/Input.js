import React from 'react';

function Input() {
  const [nome, setNome] = React.useState('');

  return (
    <>
      <input
        type="text"
        nome="fnome"
        value={nome}
        //aqui o parâmetro e função recebe automaticamente nome
        onChange={(e) => setNome(e.target.value)}
      />
      <p>{nome}</p>
    </>
  );
}

export default Input;
