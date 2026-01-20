import { ItemTarea } from "../../common/itemtodoList/ItemTarea.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/Storage.js";

let container = document.getElementById("container"); 

let TodoList = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "todo-list";

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";
    sectionTareas.appendChild(h2);

    let tareas = getTasksFromStorage();

    tareas.forEach((tarea, index) => {
        const onEdit = (nuevoNombre, nuevoEstado, nuevaFecha) => {
            tareas[index] = {
                nombre: nuevoNombre,
                estado: nuevoEstado,
                fecha: nuevaFecha
            };
            saveTasksToStorage(tareas);

            container.innerHTML = "";
            container.appendChild(TodoList());
        };

        const onDelete = () => {
            tareas.splice(index, 1);
            saveTasksToStorage(tareas);

            container.innerHTML = "";
            container.appendChild(TodoList());
        };

        sectionTareas.appendChild(
            ItemTarea(
                "todo.svg",
                tarea.nombre,
                tarea.estado,
                tarea.fecha,
                onEdit,
                onDelete
            )
        );
    });

    return sectionTareas;
};

export { TodoList };
