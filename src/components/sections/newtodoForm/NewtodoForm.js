import { TodoList } from "../todoList/TodoList.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/Storage.js";

let NuevoTodo = () => {
    let container = document.getElementById("container");
    let sectionNuevoTodo = document.createElement("section");
    sectionNuevoTodo.className = "nuevo-todo";

    let h2 = document.createElement("h2");
    h2.textContent = "Nueva Tarea";

    let form = document.createElement("form");

    let inputNombreTarea = document.createElement("input");
    inputNombreTarea.type = "text";
    inputNombreTarea.placeholder = "Nombre de la tarea";
    inputNombreTarea.name = "tarea";
    inputNombreTarea.required = true;

    let selectEstado = document.createElement("select");
    selectEstado.name = "estado";
    selectEstado.required = true;

    let optionPendiente = document.createElement("option");
    optionPendiente.value = "pendiente";
    optionPendiente.textContent = "Pendiente";

    let optionCompletada = document.createElement("option");
    optionCompletada.value = "completada";
    optionCompletada.textContent = "Completada";

    selectEstado.appendChild(optionPendiente);
    selectEstado.appendChild(optionCompletada);

    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.name = "fecha";
    inputFecha.required = true;

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    form.appendChild(inputNombreTarea);
    form.appendChild(selectEstado);
    form.appendChild(inputFecha);
    form.appendChild(btnAgregar);

    sectionNuevoTodo.appendChild(h2);
    sectionNuevoTodo.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            nombre: inputNombreTarea.value,
            estado: selectEstado.value,
            fecha: inputFecha.value
        };

        const tareas = getTasksFromStorage();
        tareas.push(tarea);
        saveTasksToStorage(tareas);

        container.innerHTML = "";
        container.appendChild(TodoList());
    });

    return sectionNuevoTodo;
};

export { NuevoTodo };
