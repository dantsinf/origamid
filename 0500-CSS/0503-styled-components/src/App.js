import React from 'react';
import styled from 'styled-components';

/*CSS
Styled Components

Styled Components
Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único.*/

/*styled
O styled é um objeto com diferentes métodos que representam as tags de HTML.*/

/* part1
const Title = styled.h1`
  font-size: 1.5em;
  color: tomato;
`;

const App = () => {
  return (
    <div>
      <Title>Título principal</Title>
    </div>
  );
};
*/
const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

/* primeiro comprar, apagar esse se quiser testar o outro e vise-versa
const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;
*/
/*part 2
const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;
*/

/* part3
const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;
*/

//cor dandomica
const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  cursor: pointer;
  /*Pseudo
Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.*/
  &:houver {
    background: tomato;
  }
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <Comprar ativo={ativo} onClick={handleClick}>
        Comprar aqui
      </Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>
            Notebook <Preco cor="#84e">R$ 1999</Preco>
          </Titulo>
          <Comprar>Comprar</Comprar>
        </Produto>
        <Produto>
          <Titulo>
            Smartphone <Preco cor="#53d956">R$ 2999</Preco>
          </Titulo>
          <Comprar>Comprar</Comprar>
        </Produto>
      </ProdutosContainer>
    </>
  );
};

export default App;
