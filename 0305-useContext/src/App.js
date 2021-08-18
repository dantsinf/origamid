import React from 'react';
import Produto from './Produto';
import UserContext from './UserContext';

const App = () => {
  return (
    <UserContext.Provider value={{ nome: 'André' }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default App;
