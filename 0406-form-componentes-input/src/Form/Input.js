import React from 'react';
// FORMULÁRIOS, Componentes Input
/*Input
Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.*/

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
