import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

let Formulario = (containerContactos) => {
    let section = document.createElement("section");
    section.className = "formulario";

    let h3 = document.createElement("h3");
    h3.textContent = "Agregar Contacto";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";

    let button = document.createElement("button");
    button.type = "button"; // importante, que NO sea submit
    button.textContent = "Agregar";

    // Evento click
    button.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();
        let telefono = inputTelefono.value.trim();

        if (nombre && telefono) {
            containerContactos.appendChild(ItemContacto("user.svg", nombre, telefono));
            inputNombre.value = "";
            inputTelefono.value = "";
        } else {
            alert("Por favor completa todos los campos");
        }
    });

    section.appendChild(h3);
    section.appendChild(inputNombre);
    section.appendChild(inputTelefono);
    section.appendChild(button);

    return section;
};

export { Formulario };
