const comprarBoleto=(function(){
    //Privado

    let evento='Conferencia JS 2019';
    const adquirirBoleto=()=>{
        const elemento= document.createElement('p');
        elemento.textContent=`Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }
    //Publico
    return {
        mostrarBoleto:function(){
           adquirirBoleto();
        }
    }
})();
comprarBoleto.mostrarBoleto();
//No funciona porque tiene que estar dentro del return para acceder
//console.log(comprarBoleto.evento);