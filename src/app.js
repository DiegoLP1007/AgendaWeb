import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts , viewNewContact, viewNewTodo, viewTodoList } from "./components/layout/nav/NavController.js";

let app = document.getElementById("app");
 
let nav = document.getElementById("nav");
 
nav.appendChild(Button("Usuario", "usuario", "user.svg"));
nav.appendChild(Button(
    "Agenda",
    "agenda",
    "user.svg",
viewContacts
));
nav.appendChild(Button(
    "Crear contacto",
    "plus",
    "mas.svg",
viewNewContact
))
    ;
nav.appendChild(Button(
    "ToDoList",
    "todoList", 
    "todo.svg",
    viewTodoList
));
nav.appendChild(Button("Crear tarea",
    "plus",
    "mas.svg",
    viewNewTodo ));
 
let container = document.getElementById("container");
 
container.innerHTML = "";
container.appendChild(Contactos());

//async function tareas(params) {
//    try {
//        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//        let r = await data.json();
//        console.log(r);

 //   } catch (error) {
 //       console.log(error);
//    }
///}

//tareas();

console.log("Completado")