import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

/*
useParams
O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.
*/

const Produto = () => {
  /* é aqui que tu usaria um fetch com uma url e passaria os dados do produto */
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search);
  console.log(search.get('q'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
