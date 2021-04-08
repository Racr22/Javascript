const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];
//flat(aplanar, deja los elementos en un mismo nivel)
//console.log(edades.flat(2));
//devuelve un array,quitando los 2 array internos [8,10,9, 11,13,18, 20,18,20,21];
console.log(edades.flat(Infinity));