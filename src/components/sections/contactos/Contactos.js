import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";


let Contactos = () =>{
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));                    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Diego Leiva" , "487951331"));
    return sectionContactos;
};

export { Contactos }