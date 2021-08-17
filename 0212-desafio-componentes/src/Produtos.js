import React from 'react';

const Produtos = () => {
  return (
    <React.Fragment>
      <h2 style={{ color: 'green' }}>Produtos</h2>
      <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
        <h3>Notebook</h3>
        <ul>
          <li>16GB RAM</li>
          <li>512GB</li>
        </ul>
      </div>
      <br />
      <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
        <h3>Smartphone</h3>
        <ul>
          <li>2GB RAM</li>
          <li>128GB</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Produtos;
