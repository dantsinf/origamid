//tens que indicar quais itens tu está importando

// quadrado.js
function areaQuadrado(l) {
  return l * l;
}

function perimetroQuadrado(l) {
  return 4 * l;
}

const quadrado = {
  areaQuadrado,
  perimetroQuadrado,
};
//
export default quadrado;
