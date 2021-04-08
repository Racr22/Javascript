/** Classes y Prototypes */
function PlayList(nombre){
    this.nombre=nombre;
}
PlayList.prototype.play=function(){
    console.log(`Reproduciendo la playlist ${this.nombre}`);
}
PlayList.prototype.eliminar=function(){
    console.log(`Eliminando la playlist ${this.nombre}`);
}
const playList= new PlayList('Rock 90s');
const playList2= new PlayList('Punk 90s');

//console.log(playList2);
playList.play();
playList.eliminar();