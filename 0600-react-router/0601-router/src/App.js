import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';
import NaoEncontrado from './NaoEncontrado';

/*
BrowserRouter, Routes e Route
O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.
*/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
