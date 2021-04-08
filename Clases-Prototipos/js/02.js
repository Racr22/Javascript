/* this con explicit binding */
function persona(el1,el2){
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}`);
}
const informacion={
    nombre:'Rodrigo',
    trabajo: 'Programador',
}
const generosMusicales=['Heavy Metal','Rock'];
/*el call esta dentro de todas las funciones
y permite llamar especificando el contexto que va a ser usada
*/
//Explicit binding con con call, cuando pasas arreglo tienes que colocar todas las posiciones
persona.call(informacion,generosMusicales[0],generosMusicales[1]);

//Explicit binding con .apply, (si toma un arreglo)
persona.apply(informacion,generosMusicales);

//Explicit binding .bind es igual a call, pero crea una nueva funcion
const nuevaFn=persona.bind(informacion,generosMusicales[0],generosMusicales[1]);

nuevaFn();