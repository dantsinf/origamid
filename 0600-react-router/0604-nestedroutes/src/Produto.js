import { useParams, Route, Routes, NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

/*REACT ROUTER
Nested Routes
Utilizamos nested routes quando precizamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.*/

/* part 1
const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>{' '}
        <NavLink to="avaliacao">Avaliação</NavLink>{' '}
        <NavLink to="customizado">Customizado</NavLink>{' '}
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />{' '}
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />{' '}
        <Route path="customizado" element={<ProdutoCustomizado />} />{' '}
      </Routes>
    </div>
  );
};
*/

/*Outlet
Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota.*/

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
