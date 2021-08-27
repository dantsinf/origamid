import React from 'react';
import Head from './Head';

/*Helmet
Uma extensão famosa é o react-helmet. Ela retonar com componente em que você pode definir tags do Head dentro do mesmo.

https://github.com/nfl/react-helmet

npm install react-helmet*/

/* part1 
const Home = () => {
  return (
    <div>
      <Head title="Página Home" description="Descrição da home" />
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};
*/

import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
