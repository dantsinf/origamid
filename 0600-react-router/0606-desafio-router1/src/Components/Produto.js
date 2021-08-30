import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';

const Produto = () => {
  const params = useParams();

  return (
    <div className={styles.produto}>
      <h1>Produto</h1>
    </div>
  );
};

export default Produto;
