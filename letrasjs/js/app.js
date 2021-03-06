import {API} from './api.js';
import *as UI from './interfaz.js';
UI.formularioBuscar.addEventListener('submit',(e)=>{
    e.preventDefault();

    //obtener datos del formulario
    const artista=document.querySelector('#artista').value;
    const cancion=document.querySelector('#cancion').value;

    if(artista==='' || cancion===''){
        //Si el usuario deja los campos vacios, mostrar error
        UI.divMensajes.innerHTML='Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(()=>{
            UI.divMensajes.innerHTML='';
            UI.divMensajes.classList.remove('error');
        },3000);
    }else{
        //Si esta completo realizar consulta a la api
        const api= new API(artista,cancion);
        api.consultarAPI()
            .then(data=>{
                if(data.respuesta.lyrics){
                   //La cancion existe
                   const letra=data.respuesta.lyrics;
                   UI.divResultado.textContent=letra;
                }else{
                    //La cancion no existe
                    UI.divMensajes.innerHTML='La cancion No existe, prueba con otra busqueda';
                    UI.divMensajes.classList.add('error');
                    setTimeout(()=>{
                        UI.divMensajes.innerHTML='';
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    },3000);
                }
            });
    }

});