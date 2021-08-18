/*createContext
O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado. */

import React from 'react';

const UserContext = React.createContext();

export default UserContext;
