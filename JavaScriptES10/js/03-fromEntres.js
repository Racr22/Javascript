const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);
//permite crear un objeto de una serie de claves y valores
const objeto= Object.fromEntries(map);
console.log(objeto);

delete objeto.precio;
console.log(objeto);