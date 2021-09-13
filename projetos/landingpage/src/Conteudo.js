import React from "react";
import "./Conteudo.css";

const Conteudo = ({ handleChannge }) => {
  return (
    <>
      <div className="conteudo">
        <div className="center">
          <div className="conteudo-sozinho">
            <h3>1) 300ml R$6,00</h3>
            <p>Sem adicionais</p>
            <button onClick={handleChannge}>Adicionar</button>
          </div>
          <div className="conteudo-sozinho">
            <h3>2) 400ml R$7,00</h3>
            <p>Com cobertura</p>
            <button onClick={handleChannge}>Adicionar</button>
          </div>
          <div className="conteudo-sozinho">
            <h3>3) 500ml R$9,00</h3>
            <p>Cobertura e frutas cítricas</p>
            <button onClick={handleChannge}>Adicionar</button>
          </div>
          <div className="conteudo-sozinho">
            <h3>4) 700ml R$12,00</h3>
            <p>Cobertura e frutas</p>
            <button onClick={handleChannge}>Adicionar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conteudo;
