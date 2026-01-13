
import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Formulario } from "./components/sections/formulario/Formulario.js";

// App
let app = document.getElementById("app");

// section menu
let nav = document.getElementById("nav");
// agregar botones
nav.appendChild(Button("Agenda" , "agenda" , "user.svg"));
nav.appendChild(Button("Crear contacto" , "plus" , "mas.svg"));
nav.appendChild(Button("ToDoList" , "todoList" , "todo.svg"));
nav.appendChild(Button("Crear tarea" , "plus" , "mas.svg"));



//section container
let sectionContactos = Contactos();
let container = document.getElementById("container");
container.appendChild(sectionContactos);
container.appendChild(Formulario(sectionContactos));

