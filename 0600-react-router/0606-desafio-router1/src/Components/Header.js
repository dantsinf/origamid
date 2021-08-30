import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          {/*primeiro ele vai para home e a home sempre é barra*/}
          {/*o end para o navegador não achar que tu está na mesma página*/}
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          {/*depois ele vai para contato*/}
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="contato"
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
