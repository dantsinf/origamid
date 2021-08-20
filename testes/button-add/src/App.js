import React from 'react';

const App = () => {
  const [participantes, setParticipantes] = React.useState([
    { id: 1, nome: 'participante-1' },
    { id: 2, nome: 'participante-2' },
    { id: 3, nome: 'participante-3' },
  ]);

  function handleAddRepository() {
    setParticipantes([
      ...participantes,
      { id: Math.random(), nome: 'Novo participante' },
    ]);
  }
  //originalmente era ul, mas com ol não precisamos fazer um contador de
  //participantes
  return (
    <>
      <ol>
        {participantes.map((participante) => (
          //key pois temos o map
          <li key={participante.id}>{participante.nome}</li>
        ))}
      </ol>
      <button onClick={handleAddRepository}>Adicionar</button>
    </>
  );
}; //primeira function

export default App;
