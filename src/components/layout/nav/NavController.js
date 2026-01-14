import { Contactos } from "../../sections/Contactos/Contactos.js";
import { NuevoContacto } from "../../sections/formulario/NuevoContacto.js"; 
let container = document.getElementById("container");
 
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}
 
let viewNewContact = function () {
    container.innerHTML = "";
    container.appendChild(NuevoContacto());
}
 
export { viewContacts, viewNewContact };