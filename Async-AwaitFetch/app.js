async function leetTodos(){
    const respuesta= await fetch
    ('https://jsonplaceholder.typicode.com/todos');
    //Procede cuanto la respuesta este hecha
    const datos= await respuesta.json();

    return datos;
}
leetTodos()
    .then(usuarios=>console.log(usuarios));