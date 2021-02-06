//variables
const listaTweets= document.getElementById('lista-tweets');

//Events Listeners
eventListeners();
function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);
    //Borrar Tweets
    listaTweets.addEventListener('click',borrarTweet);
    //Contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo);
}

//function tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    const tweet= document.getElementById('tweet').value;
    const botonBorrar=document.createElement('a')
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';
    //crear elemento y agregarlo a la lista
    const li= document.createElement('li');
    li.innerText=tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar); 
    //Añade el boton a la lista
    listaTweets.appendChild(li);
    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}
//function borrar tweet del DOM
function borrarTweet(e){
     e.preventDefault();
     if(e.target.className==='borrar-tweet'){
         e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText)
        // alert('Tweet Eliminado');
     }
}
//agrega tweet al local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets=obtenerTweetsLocalStorage();
    //añadir el nuevo tweet
    tweets.push(tweet);
    //convertir un strina a arreglo en local storage
    localStorage.setItem('tweets',JSON.stringify(tweets));
   
}
//Comprobar que haya elementos en local storage
function obtenerTweetsLocalStorage(){
    let tweets;
    //Revisamos los valores de localstorage
    if(localStorage.getItem('tweets')===null){
        tweets=[]
    }else{
        tweets=JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
//Mostrar datos de local storage en la lista
function localStorageListo(){
    let tweets;
    tweets= obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        
        const botonBorrar=document.createElement('a')
        botonBorrar.classList='borrar-tweet';
        botonBorrar.innerText='X';
        //crear elemento y agregarlo a la lista
        const li= document.createElement('li');
        li.innerText=tweet;
        //Añade el boton de borrar al tweet
        li.appendChild(botonBorrar); 
        //Añade el boton a la lista
        listaTweets.appendChild(li);
    });
}
//Eliminar tweet del localstorage
function borrarTweetLocalStorage(tweet){
    let tweets,tweetBorrar;
    //Elimina la X del tweet
    tweetBorrar=tweet.substring(0,tweet.length-1);
    tweets=obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet,index){
        if(tweetBorrar===tweet){
            tweets.splice(index,1);
        }
    });
    localStorage.setItem('tweets',JSON.stringify(tweets));
    //console.log(tweets);
    
}