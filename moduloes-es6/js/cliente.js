//exportar variables
export const nombreCliente='Juan';
export let ahorro=200;
//exportar funciones
export function mostrarInformacion(nombre,ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}
//exportar clases
export class Cliente{
    constructor(nombre,ahorro){
        this.nombre=nombre;
        this.ahorro=ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}