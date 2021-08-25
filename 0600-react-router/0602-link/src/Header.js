import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

/*
NavLink
O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.
*/

const Header = () => {
  const activeStyle = {
    color: 'tomato',
  };
  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="contato" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
