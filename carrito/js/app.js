const carrito= document.getElementById('carrito');
const cursos= document.getElementById('lista-cursos');
const listaCursos= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito');
cargarEventsListeners();

function cargarEventsListeners(){
    // Dispara cuando se presiona agregar Carrito
    cursos.addEventListener('click',comprarCurso);
    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click',eliminarCurso);
    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    //Al cargar documento, mostrar localstorage
    document.addEventListener('DOMContentLoaded',leerLocalStorage);
}

function comprarCurso(e){
    //Delegation para agregar Carrito
    if(e.target.classList.contains('agregar-carrito')){
        
        const curso= e.target.parentElement.parentElement;
        //enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }    
}
//lee los datos del curso
function leerDatosCurso(curso){
    const infoCurso={
        imagen:curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')

    }
   insertarCarrito(infoCurso); 
}
//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row= document.createElement('tr');
    row.innerHTML= `
        <td>
            <img src="${curso.imagen}" width="100px">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">
            X
            </a>
        </td>
    `;
    listaCursos.appendChild(row);  
    guardarCursoLocalStorage(curso);
}
//eliminar curso de carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();
    let curso,cursoId;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
       curso= e.target.parentElement.parentElement;
       cursoId=curso.querySelector('a').getAttribute('data-id'); 
    }
    eliminarCursoLocalStorage(cursoId);
}
//elimina los cursos del carrito en el dom
function vaciarCarrito(e){
    //Forma lenta
    //listaCursos.innerHTML='';
    
    //forma rapida (recomendada)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //vaciar localStorage
    vaciarLocalStorage();

    return false;
}
//almacena curso en el carrito al local storage
function guardarCursoLocalStorage(curso){
    let cursos;
    //tomar el valor del arreglo con datos del LS  o vacio
    cursos=obtenerCursosLocalStorage();
    //el curso seleccionado se agrega al arreglo
    cursos.push(curso);
    localStorage.setItem('cursos',JSON.stringify(cursos));
}
//Comprueba que haya elementos en local storage
function obtenerCursosLocalStorage(){
    let cursosLS;
    //comprobamos si hay algo en localstorage
    if(localStorage.getItem('cursos')===null){
        cursosLS=[];
    }else{
        cursosLS=JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}
//imprime los cursos del LocalStorage en el carrito
function leerLocalStorage(){
    let cursosLS;
    cursosLS=obtenerCursosLocalStorage();
    cursosLS.forEach(curso => {
        const row= document.createElement('tr');
        row.innerHTML= `
            <td>
                <img src="${curso.imagen}" width="100px">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">
                X
                </a>
            </td>
        `;
        listaCursos.appendChild(row); 
    });
}
//eliminar el curso por ID del local storage
function eliminarCursoLocalStorage(curso){
    let cursosLS;
    //obtenermos el arreglo de cursos, comparamos el id
    cursosLS= obtenerCursosLocalStorage();
    cursosLS.forEach((cursoLS,index)=>{
       if(cursoLS.id=== curso){
           cursosLS.splice(index,1);
       } 
    });
    //cargamos el array en sin el curso, nuevamente en el localstorage
    localStorage.setItem('cursos',JSON.stringify(cursosLS));
}
//elimina todos los cursos del localStorage
function vaciarLocalStorage(){
    localStorage.clear();
}
