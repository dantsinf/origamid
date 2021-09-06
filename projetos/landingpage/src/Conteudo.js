import React from 'react';
import './Conteudo.css';

const Conteudo = () => {
  return (
    <>
      <div className="conteudo">
        <div className="center">
          <div className="conteudo-sozinho">
            <h3>1) 300ml R$6,00</h3>
            <p>Sem adicionais</p>
          </div>
          <div className="conteudo-sozinho">
            <h3>2) 400ml R$7,00</h3>
            <p>Com cobertura</p>
          </div>
          <div className="conteudo-sozinho">
            <h3>3) 500ml R$9,00</h3>
            <p>Cobertura e frutas cítricas</p>
          </div>
          <div className="conteudo-sozinho">
            <h3>4) 700ml R$12,00</h3>
            <p>Cobertura e frutas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conteudo;
