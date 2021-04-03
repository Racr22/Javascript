const cotizador= new API('e13611b5f4c4aa5ce0e256ae2d3cd701e834e4a97ebd78148f43c4cb847e1432');
const ui = new Interfaz();


//leer el formulario
const formulario= document.querySelector('#formulario');
//eventlistener

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("enviado...");
    //leer la moneda seleccionada

    const monedaSelect= document.querySelector('#moneda');
    const monedaSeleccionada=monedaSelect.options[monedaSelect.selectedIndex].value;

    //leer la criptomoneda seleccionada
    const criptomonedaSelect= document.querySelector('#criptomoneda');
    const criptomonedaSeleccionada=criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;
    //compruebo que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptomonedaSeleccionada===''){
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }else{
        cotizador.obtenerValores(monedaSeleccionada,criptomonedaSeleccionada)
            .then(data=>{
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptomonedaSeleccionada);
            })
    }
});