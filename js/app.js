//Identificar objetos del DOM
const cajaDeTexto=document.getElementById("cajaDeTexto");
const BtnAgregar=document.getElementById("BtnAgregar");
var lista = document.getElementById("lista");

//Creando arreglo para almacenar las tareas
notepad=[];

getTareas ();
//Agregar eventos
BtnAgregar.addEventListener("click", () => crearTarea(cajaDeTexto.value));


//Crear funciones

function crearTarea (tareaContent){
notepad.push(tareaContent);
console.log(notepad)

cajaDeTexto.value = "";

MostrarTarea();
}

//Funcion para Mostrar tareas
function MostrarTarea(){
    lista.innerHTML=""

    notepad.forEach((tarea,id) => {
    var tareaElemento = document.createElement("li");
    tareaElemento.setAttribute('onclick',`deleteTarea(${id})`);
    tareaElemento.innerHTML+=tarea; 
     lista.appendChild(tareaElemento);
    });
    almacenarTareas();
}

function deleteTarea(id){

notepad.splice(id,1);

MostrarTarea();
}

//Crear nuestro item del LocalStorage
function almacenarTareas(){
window.localStorage.setItem("tasklist",JSON.stringify(notepad));
}
//Obtener items del LocalStorage
function getTareas () {

    let almacenarTareas=window.localStorage.getItem("tasklist");
    console.log(almacenarTareas);

    if (almacenarTareas!==null){
    almacenarTareas =JSON.parse(almacenarTareas);
    notepad = almacenarTareas;
    MostrarTarea();
    }
}