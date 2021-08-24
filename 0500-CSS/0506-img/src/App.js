import React from 'react';
//importando img pelo css
import './App.css';
import DbzSvg from './DbzSvg';
//importando img pelo js
import foto from './img/photo.jpg';
//renomeando o componente
//import { ReactComponent as Dbz } from './img/dbz.svg';

/*CSS, Imagens
Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.*/

/*
SVG
Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.
*/

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      {/*pois comentamos o import as Dbz*/}
      {/*<Dbz className="dbz" />*/}
      <img className="dbz" src={foto} alt="Dbz" />
      <DbzSvg color="tomato" />
    </div>
  );
};

export default App;
