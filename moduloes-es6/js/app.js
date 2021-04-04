import {nombreCliente,ahorro,mostrarInformacion, Cliente} from './cliente.js';
import {nombreEmpresa,ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa} from './empresa.js';

// console.log(nombreCliente);
// console.log(nombreEmpresa);
//importar todo de cliente con un alias
// import * as cliente from './cliente.js';
// console.log(cliente);
// const info= mostrarInformacion(nombreCliente,ahorro);
// console.log(info);
let empresa= new Empresa(nombreEmpresa,ahorroEmpresa,categoria);
console.log(empresa.mostrarInformacion());
// const infoEmpresa= informacionEmpresa(nombreCliente,ahorro);
// console.log(infoEmpresa);
//utilizar la clase
// let cliente= new Cliente(nombreCliente,ahorro);
// console.log(cliente.mostrarInformacion());
//con import * as cliente se usa punto
//esto es la importacion no la instancia de la clase: cliente.mostratInformacion