import React from 'react';
import './Header.css';

const Header = ({ cont, handleAlertClick }) => {
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Açaí Time</h3>
            </div>
            <div className="item-menu">
              <h2>{cont === 0 ? '' : cont}</h2>
              <p>{handleAlertClick}</p>
            </div>
          </div>

          <div className="form">
            <h2>Faça o pedido aqui!</h2>
            <form action="">
              <div className="items-form">
                <input placeholder="Digite seu nome..." type="text" />
                <input placeholder="Digite seu email..." type="text" />
                <input placeholder="Digite o seu celular..." type="text" />
                <input placeholder="Digite a opção" type="text" />
                <input type="submit" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
