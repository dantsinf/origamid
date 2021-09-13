import React from "react";
import "./App.css";
import Conteudo from "./Conteudo";
import Header from "./Header";

function App() {
  const [cont, setCont] = React.useState(0);

  function handleChannge() {
    setCont(cont + 1);
  }

  return (
    <div className="App">
      <Header cont={cont} />
      <Conteudo handleChannge={handleChannge} />
    </div>
  );
}

export default App;
