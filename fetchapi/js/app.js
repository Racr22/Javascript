document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBTN').addEventListener('click',cargarREST);

function cargarTXT(){
    fetch('datos.txt')
    .then(function(res){
       return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('resultado').innerHTML=data;
    })
    .catch(function(error){
        console.log(error);
    });
}
function cargarJSON(){
    fetch('empleados.json')
    //Hace la conexion y definimos como devuelve los datos
    .then(function(res){
        return res.json();
    })
    .then(function(empleados){
        let html='';
        empleados.forEach(empleado => {
            html+=`
            <li>${empleado.nombre} ${empleado.puesto}</li>
            `
        });
        document.getElementById('resultado').innerHTML=html;
    })
    .catch(function(error){
        console.log(error);
    });
}
function cargarREST(){
    fetch('https://picsum.photos/list')
    .then(function(res){
        return res.json();
    })
    .then(function(imagenes){
        console.log(imagenes);
        let html='';
        imagenes.forEach(function(imagen){
            html+=`
                <li>
                <a href="${imagen.post_url}" target="_blank">Ver imagen</a>
                ${imagen.author}
                </li>
            `
        });
        document.getElementById('resultado').innerHTML=html;

    })
}