let ItemTarea = (iconTarea, nombreTarea, estado, fecha, onEdit, onDelete) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${iconTarea}`;

    let contenidoDiv = document.createElement("div");
    contenidoDiv.className = "contenido-tarea";

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombreTarea;

    let etiquetaEstado = document.createElement("p");
    etiquetaEstado.textContent = estado;
    etiquetaEstado.className = estado.toLowerCase() === "completada" ? "completada" : "pendiente";

    let etiquetaFecha = document.createElement("p");
    etiquetaFecha.textContent = fecha;

    contenidoDiv.appendChild(etiquetaNombre);
    contenidoDiv.appendChild(etiquetaEstado);
    contenidoDiv.appendChild(etiquetaFecha);

    let botonesDiv = document.createElement("div");
    botonesDiv.className = "botones-item";

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";

    botonesDiv.appendChild(btnEditar);
    botonesDiv.appendChild(btnEliminar);

    div.appendChild(etiquetaImg);
    div.appendChild(contenidoDiv);
    div.appendChild(botonesDiv);

    btnEditar.addEventListener("click", (e) => {
        e.stopPropagation();

        let formEdit = document.createElement("form");
        formEdit.className = "form-edit-tarea";

        let inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.value = nombreTarea;
        inputNombre.required = true;

        let selectEstado = document.createElement("select");
        let optionPend = document.createElement("option");
        optionPend.value = "pendiente";
        optionPend.textContent = "Pendiente";
        let optionComp = document.createElement("option");
        optionComp.value = "completada";
        optionComp.textContent = "Completada";

        selectEstado.appendChild(optionPend);
        selectEstado.appendChild(optionComp);
        selectEstado.value = estado;

        let inputFecha = document.createElement("input");
        inputFecha.type = "date";
        inputFecha.value = fecha;

        let btnGuardar = document.createElement("button");
        btnGuardar.type = "submit";
        btnGuardar.textContent = "Guardar";

        formEdit.appendChild(inputNombre);
        formEdit.appendChild(selectEstado);
        formEdit.appendChild(inputFecha);
        formEdit.appendChild(btnGuardar);

        div.innerHTML = "";
        div.appendChild(formEdit);

        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            onEdit(inputNombre.value, selectEstado.value, inputFecha.value);
        });
    });

    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation();
        onDelete();
    });

    return div;
};

export { ItemTarea };
