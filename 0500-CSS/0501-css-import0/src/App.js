import React from 'react';
//import styles from './Produto.module.css';
//part2 - ordem importa
//fique mudando a ordem da importação abaixo
//o que vem depois no CSS sempre tem relevância, do que veio antes
import Title from './Title';
import './App.css';

/*part1
Title é um exemplo de componente que tu não vai ultilizar
cuidado com componete que tu não vai utilizar
import Title from './Title';
*/

const App = () => {
  return (
    <div className="container">
      <Title />
    </div>
  );
};

export default App;
