const App = () => {
  const frutas = ['banana', 'abacaxi', 'uva', 'kiwi'];
  const mostra = frutas.map((e, i) => (
    <li key={i}>
      {i} - {e}
    </li>
  ));
  return (
    <>
      <h2>Exemplo com MAP</h2>
      <ul>{mostra}</ul>
    </>
  );
};

export default App;
