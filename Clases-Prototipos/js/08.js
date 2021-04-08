//Composicion, escribir una serie de funciones y asignarlas al objeto deseado
const obtenerNombre=(info)=>({
    mostrarNombre(){
        console.log(`Nombre ${info.nombre}`);
    }
});
const guardarEmail= (info)=>({
    email(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email=email;
    }
});
const obtenerEmail=(info)=>({
    mostrarEmail(){
        console.log(`Email: ${info.nombre}`);
    }
});
const obtenerEmpresa=(info)=>({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});
const obtenerPuesto=(info)=>({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});
function Cliente(nombre,email,empresa){
    let info={
        nombre,
        email,
        empresa
    }
    //OBject asign, es utilizada para unir un objeto, con una funcion declarada afuera del mismo
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}
function Empleado(nombre,email,puesto){
    let info={
        nombre,
        email,
        puesto
    }
    //OBject asign, es utilizada para unir un objeto, con una funcion declarada afuera del mismo
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}
//Se hace referencia a la funcion mostrar, no a la vinculada 

const cliente= Cliente('Juan',null,'Udemy');
cliente.email('cliente@cliente.com');
cliente.mostrarEmail()
cliente.mostrarNombre();
cliente.mostrarEmpresa()
const empleado= Empleado('Pedro',null,'Programador');
empleado.mostrarNombre();
empleado.email('cliente@cliente.com');
empleado.mostrarEmail()
empleado.mostrarPuesto()