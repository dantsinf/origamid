import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return (
    <div>
      <h1>Header Aqui</h1>
    </div>
  );
};
//observe no console que depois do memo não ficou renderizando
export default React.memo(Header);
