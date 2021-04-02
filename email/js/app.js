//variables
const email= document.getElementById('email');
const asunto= document.getElementById('asunto');
const mensaje= document.getElementById('mensaje');
const btnEnviar=document.getElementById('enviar');
const formularioEnviar= document.getElementById('enviar-mail');
const resetBtn= document.getElementById('resetBtn');
//event listener
eventListeners();
    function eventListeners(){
        //Inicio de la aplicacion y deshabilitar submit
        document.addEventListener('DOMContentLoaded',inicioApp);
        //campos del formulario
        email.addEventListener('blur',validarCampo);
        asunto.addEventListener('blur',validarCampo);
        mensaje.addEventListener('blur',validarCampo);
        //Boton de enviar en el submit
        formularioEnviar.addEventListener('submit',enviarEmail);
        //Boton de reset
        resetBtn.addEventListener('click',resetFormulario);
    }
//funciones
function inicioApp(){
    //deshabilitar el envio
    btnEnviar.disabled=true;
}
function validarCampo(){
    //se valida la longitud del texto y que no este vacio
    validarLongitud(this)
    //Validad unicamente el email
    if(this.type=="email"){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if(email.value!== '' && asunto.value !== '' && mensaje.value !== ''){
       
        if(errores.length===0){
            btnEnviar.disabled=false;
        }
    }
}
function resetFormulario(e){
    e.preventDefault();
    formularioEnviar.reset();
}
//verifica la longitud del texto en los campos
function validarLongitud(campo){
    //console.log(campo.value.length);
   if(campo.value.length>0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
   }else{
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
   }
}
function validarEmail(campo){
    const mensaje= campo.value;
    if(mensaje.indexOf('@')!==-1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
//cuando se envia el correo
function enviarEmail(e){
    e.preventDefault();
    //Spinner al presionar Enviar
    const spinnerGif= document.querySelector('#spinner');
    spinnerGif.style.display='block';
    //Gif que envia email
    const enviado= document.createElement('img');
    enviado.src="img/mail.gif";
    enviado.style.display="block";
    //Ocultar spinner y mostrar gif enviado
    setTimeout(function(){
        spinnerGif.style.display="none";
        document.querySelector('#loaders').append(enviado);
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },5000)
    },3000);
   
    console.log('mail enviado');
}