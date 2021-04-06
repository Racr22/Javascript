const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

// forEach para recorrer
	// let resultado=[];
	// autos.forEach((auto)=>{
	// 	if(auto.color==='Rojo'){
	// 		resultado.push(auto);
	// 	}
	// });
	// console.log(resultado);

	// autos.forEach((auto)=>{
	// 	console.log(auto);
	// });
	
	
// map Retorna un arreglo nuevo
// let resultado=autos.map(auto=>{
// 	return auto;
// });
// console.log(resultado);
// filter extraer valores y trae todos los que cumplan la condicion, el return esta implicito en las funciones de =>
// let resultado = autos.filter(auto => auto.marca!=='BMW');
// console.log(resultado);
// let resultado = autos.filter(auto => auto.color ==='Rojo');
// let resultado = autos.filter(auto => auto.year ===2018);
// let resultado = autos.filter(auto => auto.year >2015);
// let resultado = autos.filter(auto => auto.precio >50000);
// let resultado = autos.filter(auto => auto.year >= 2015 && auto.year<=2017);
// let resultado = autos.filter(auto => auto.year >= 2015 && auto.year<=2017 && auto.marca==='BMW');
// console.log(resultado)

// find, se trae el primero que encuentre
// let resultado=autos.find(auto=> auto.marca==='Ford');
// console.log(resultado)

// reduce, toma todos los valores y retorna un valor unico
//total es el valor anterior, después de la coma, se pone el valor de inicio

// let resultado= autos.reduce((total,auto)=> total+auto.precio,0);
// const numeros=[1,2,3];
// let resultado= numeros.reduce((total,numero)=> total+numero,0);
// console.log(resultado);

// some, devuelve true o false si existe o no existe

// let resultado= autos.some(auto=>auto.marca==='Ferrari');
// console.log(resultado);


