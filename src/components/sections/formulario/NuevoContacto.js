import { Contactos } from "../contactos/Contactos.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/Storage.js";

let NuevoContacto = () => {
    let sectionNuevoContacto = document.createElement("section");
    sectionNuevoContacto.className = "nuevo-contacto";
 
    let h2 = document.createElement("h2");
    h2.textContent = "Añadir Contacto";
 
    let form = document.createElement("form");
 
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.name = "nombre";
    inputNombre.required = true;
 
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.name = "telefono";
    inputTelefono.required = true;
 
    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";
 
    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);

    form.appendChild(btnAgregar);
 
    sectionNuevoContacto.appendChild(h2);
    sectionNuevoContacto.appendChild(form);
 
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let contacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };
        const contactoSection = getContactsFromStorage();
        console.log(contacto);
        const contactos = getContactsFromStorage();
        contactos.push(contacto);
        saveContactsToStorage(contactos);

        container.innerHTML = "";
        container.appendChild(Contactos());

    });
 
    return sectionNuevoContacto;
};
 
export { NuevoContacto };
 