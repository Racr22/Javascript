//Variables
const presupuestoUsuario= prompt('Cual es tu presupuesto Semanal?');
let cantidadPresupuesto;
const formulario= document.getElementById('agregar-gasto');
//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto= Number(presupuesto);
        this.restante= Number(presupuesto);
    }
    //Metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad=0){
        return this.restante-=Number(cantidad);
    }
}
//Maneja todo lo relacionado al html
class Interfaz{
    insertarPresupuesto(cantidad){
       const presupuestoSpan= document.querySelector('span#total');
       const restanteSpan= document.querySelector('span#restante');
       //Insertar al HTML
       presupuestoSpan.innerHTML=`${cantidad}`;
       restanteSpan.innerHTML=`${cantidad}`;
    }
    imprimirMensaje(mensaje,tipo){
        const divMensaje= document.createElement('div');
        divMensaje.classList.add('text-center','alert');
        if(tipo==='error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        //Quitar el alert despues de 3 segundos
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },3000);
    }
    //Inserta los gastos a la lista
    agregarGastoListado(nombre,cantidad){
        const gastosListado= document.querySelector('#gastos ul');
        //Crear li
        const li= document.createElement('li');
        li.className='list-group-item d-flex justify-content-between align-items-center';
        //Insertar el gasto
        li.innerHTML=`
        ${nombre}
        <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
        `;
        //Insertar al HTML
        gastosListado.appendChild(li);
    }
    //Comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restanteSpan= document.querySelector('span#restante');
        //Leemos el presupuesto restante
        const presupuestoRestanteUsuario= cantidadPresupuesto.presupuestoRestante(cantidad);
        restanteSpan.innerHTML=`${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto()
    }
    //Cambia de color el presupuesto Restante
    comprobarPresupuesto(){
        const presupuestoTotal=cantidadPresupuesto.presupuesto;
        const presupuestoRestante=cantidadPresupuesto.restante;
        //Comprobar el 25% del gasto
        if((presupuestoTotal/4)>presupuestoRestante){
            const restante= document.querySelector('.restante');
            restante.classList.remove('alert-success','alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal/2)>presupuestoRestante){
            const restante= document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}
//Event Listener
document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoUsuario ===null || presupuestoUsuario===''){
        window.location.reload()
    }else{
        //Instanciar presupuesto
        cantidadPresupuesto= new Presupuesto(presupuestoUsuario);
        //Instanciar la interfaz
        const ui= new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //Leer del formulario de gastos
    const nombreGasto= document.getElementById('gasto').value;
    const cantidadGasto=document.getElementById('cantidad').value;
    //Instanciar la interfez
    const ui= new Interfaz();
    if(nombreGasto ==='' || cantidadGasto===''){
        //2 parametros mensaje y tipo
        ui.imprimirMensaje('Hubo un error','error');
    }else{
        //Insertar en el html
        ui.imprimirMensaje('Correcto','correcto');
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
    
});