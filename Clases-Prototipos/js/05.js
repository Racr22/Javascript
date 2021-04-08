// Javascript Event Loop

console.log('Yo me mostraré primero');
//SetTimeout, se conoce como Nonblocking, no se coloca en el STACK, se va hacia el queue
setTimeout(function(){
    console.log('Yo me mostraré segundo');

},0);
console.log('Yo me mostraré tercero');
setTimeout(function(){
    console.log('Yo Cuarto');
},0);
//Las Promesas, Se ejecutan en Job Queue, tiene mas prioridad para ejecutarse que Queue
new Promise(function(res){
    res('Yo soy un promise')
}).then(console.log);

console.log('Yo Quinto');