import React from 'react';
//import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'));

/* não use o isso na aplicação sempre, apenas quando tiver algo específico para ser carregado, que é muito grande ou não tem necessidade de ser carregado sempre */

/*MAIS REACT
Lazy e Suspense

Code Splitting
Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias.*/

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {/*se eu tentar carregar o componente Contato sozinho nas divs, não da
      certo pois import ainda está carregando //precisamos do suspense*/}
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button
        onClick={() => {
          setAtivo(true);
        }}
      >
        Ativar
      </button>
    </div>
  );
};

export default App;
