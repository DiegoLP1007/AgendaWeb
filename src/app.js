import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/Contactos/Contactos.js";
import { NuevoContacto } from "./components/sections/formulario/NuevoContacto.js"; 
import { viewNewContact } from "./components/layout/nav/NavController.js";

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
nav.appendChild(Button("ToDoList", "todoList", "todo.svg"));
nav.appendChild(Button("Crear tarea", "plus", "mas.svg"));
 
let container = document.getElementById("container");
 
container.innerHTML = "";
container.appendChild(Contactos());