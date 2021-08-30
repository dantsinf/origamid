import React from 'react';
import styles from './Contato.module.css';
//como a img está do lado de fora da pasta é ...
import foto from '../img/p1.png';
import Head from './Head';
const Contato = () => {
  return (
    //não retorn nada de fora de section, se não tu tem 2 elementos
    //ele concatenou os nomes das classes
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>andre@origamid.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
