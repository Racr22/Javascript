// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
function obtenerAutos(){
    return [
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
}
//Datos para la busqueda
let datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}

//Event Listener para DOM Loaded
const autos= obtenerAutos();
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
});
//Event Listeners para el formulario
const marca= document.querySelector('#marca');
marca.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.marca=e.target.value;
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
const year= document.querySelector('#year');
year.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.year=Number(e.target.value);
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
const minimo= document.querySelector('#minimo');
minimo.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.minimo=Number(e.target.value);
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
const maximo= document.querySelector('#maximo');
maximo.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.maximo=Number(e.target.value);
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
const puertas= document.querySelector('#puertas');
puertas.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.puertas=Number(e.target.value);
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
const transmision= document.querySelector('#transmision');
transmision.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.transmision=e.target.value;
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
const color= document.querySelector('#color');
color.addEventListener('input',e=>{
    //si se pone this.value, es undefined, hay que usar un funcion para mantener la refencia, y obtener el valor
   datosBusqueda.color=e.target.value;
    //Mandar a llamar la funcion de filtrar Autos
    filtrarAuto();
});
function limpiarHTML(){
    //Leer el elemento Resultado
    const contenedor= document.querySelector('#resultado');

    //Limpiar resultados anteriores
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
function mostrarAutos(autos){
    
    limpiarHTML();
    
    //Leer el elemento Resultado
    const contenedor= document.querySelector('#resultado');
    
    autos.forEach(auto => {
        const autoHTML= document.createElement('p');
        autoHTML.innerHTML=`
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas -
            Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    });
}
function noResultados(){
    limpiarHTML();

    const noResultado= document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}
function filtrarAuto(){
   const Resultado= obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
   if(Resultado.length){
       mostrarAutos(Resultado);
   }else{
      noResultados()
   }
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        //Si se cumple la condicion
        return auto.marca===datosBusqueda.marca;
    }else{
        //Sino trae los demas
        return auto;
    }
}
function filtrarYear(auto){
    if(datosBusqueda.year){
        //Si se cumple la condicion
        return auto.year===datosBusqueda.year;
    }else{
        //Sino trae los demas
        return auto;
    }
}
function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        //Si se cumple la condicion
        return auto.precio>=datosBusqueda.minimo;
    }else{
        //Sino trae los demas
        return auto;
    }
}
function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        //Si se cumple la condicion
        return auto.precio<=datosBusqueda.maximo;
    }else{
        //Sino trae los demas
        return auto;
    }
}
function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        //Si se cumple la condicion
        return auto.puertas===datosBusqueda.puertas;
    }else{
        //Sino trae los demas
        return auto;
    }
}
function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        //Si se cumple la condicion
        return auto.transmision===datosBusqueda.transmision;
    }else{
        //Sino trae los demas
        return auto;
    }
}
function filtrarColor(auto){
    if(datosBusqueda.color){
        //Si se cumple la condicion
        return auto.color===datosBusqueda.color;
    }else{
        //Sino trae los demas
        return auto;
    }
}

