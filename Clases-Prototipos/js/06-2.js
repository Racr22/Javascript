class PlayList{
    constructor(nombre){
        this.nombre=nombre;
    }
    play(){
        console.log(`Reproduciendo la playlist ${this.nombre}`);
    }
    eliminar(){
        console.log(`Eliminando la playlist ${this.nombre}`);

    }
}
const playList= new PlayList('Rock 90s');
const playList2= new PlayList('Punk 90s');

//console.log(playList2);
playList.play();
playList.eliminar();