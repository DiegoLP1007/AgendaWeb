import { NuevoTodo } from "../../sections/newtodoForm/NewtodoForm.js";
import { Contactos } from "../../sections/contactos/Contactos.js";
import { NuevoContacto } from "../../sections/formulario/NuevoContacto.js"; 
import { TodoList } from "../../sections/todoList/TodoList.js";
let container = document.getElementById("container");
 
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}
 
let viewNewContact = function () {
    container.innerHTML = "";
    container.appendChild(NuevoContacto());
}

let viewNewTodo = function(){
    container.innerHTML = "";
    container.appendChild(NuevoTodo());
}

let viewTodoList = function(){
    container.innerHTML = "";
    container.appendChild(TodoList());
}
 
export { viewContacts, viewNewContact , viewNewTodo, viewTodoList};