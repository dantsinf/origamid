import React from 'react';

function Botton() {
  const [cont, setCont] = React.useState(0);

  return (
    <div>
      <button
        style={{ backgroundColor: 'green' }}
        onClick={() => {
          setCont(cont + 1);
        }}
      >
        {cont}
      </button>
    </div>
  );
}

export default Botton;
