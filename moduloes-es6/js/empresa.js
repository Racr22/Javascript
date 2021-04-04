import {Cliente} from './cliente.js';
//exportar variables
export const nombreEmpresa='Udemy';
export let ahorro=2000000000;
export let categoria='Aprendizaje';
//exportar funciones
export function mostrarInformacion(nombre,ahorro,categoria){
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria:${categoria}`;
}
//utilizar la clase del modulo cliente

export class Empresa extends Cliente{
    constructor(nombre,ahorro,categoria){
        super(nombre,ahorro);
        this.categoria=categoria;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}- Categoria:${this.categoria}`;
    }
}
