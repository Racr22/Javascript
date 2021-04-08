//Window Binding
function obtenerAuto(){
    console.log(`Mi auto es color ${this.color}`);
}
const color= 'Negro';
window.color='Negro';
obtenerAuto();
//obtenerAuto Si la funcion no encuentra el valor , busca en window
