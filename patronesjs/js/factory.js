function ContructorSitios(){
    this.crearElemento=function(texto,tipo){
        this.texto=texto;
        this.tipo=tipo;
        let html;
        if(tipo==='input'){
            html= new InputHTML(texto);
        }else if(tipo==='img'){
            html= new ImagenHTML(texto);
        }else if(tipo==='h1'){
            html= new HeadingHTML(texto);
        }else if(tipo==='p'){
            html = new ParrafoHTML(texto);
        }
       // html.tipo=tipo;
       html.texto=texto;
       /*
        Hay inconvenientes con la asignacion de atributos
        a veces detecta que corresponde a html, otros a la clase
       */
        html.mostrar= ()=>{
            const elemento= document.createElement(this.tipo);
            if(this.tipo==='input'){
                elemento.setAttribute('placeholder',html.texto);
            }else if(this.tipo==='img'){
                elemento.setAttribute('src',html.texto);
            }else{
                elemento.appendChild(document.createTextNode(html.texto));
            }
           
           document.querySelector('#app').appendChild(elemento);
        }
        return html;
    }
}
const InputHTML=function(texto){
    this.texto=texto;
}
const ImagenHTML=function(texto){
    this.texto=texto;
}
const HeadingHTML=function(texto){
    this.texto=texto;
}
const ParrafoHTML=function(texto){
    this.texto=texto;
}
const sitioweb= new ContructorSitios();
//almacenar los elementos
const elementosWeb=[];
elementosWeb.push(sitioweb.crearElemento('Bienvenidos','h1'));
elementosWeb.push(sitioweb.crearElemento('Bienvenidos a mi nuevo sitio web','p'));
elementosWeb.push(sitioweb.crearElemento('logo.svg','img'));
elementosWeb.push(sitioweb.crearElemento('Conoce mas sobre nosotros','h1'));
elementosWeb.push(sitioweb.crearElemento('Contacto','input'));
elementosWeb.push(sitioweb.crearElemento('Contactanos en el formulario','h1'));
//console.log(elementosWeb);
elementosWeb.forEach(elemento=>{
 elemento.mostrar();
});
