const LOCAL_STORAGE_KEY_CONTACTO = 'listar_agenda';
const LOCAL_STORAGE_KEY_TAREA = 'listar_tarea';
 
function saveContactsToStorage(contactos) {
  localStorage.setItem(LOCAL_STORAGE_KEY_CONTACTO, JSON.stringify(contactos));
}
 
function getContactsFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CONTACTO)) || [];
}
 
function saveTasksToStorage(tareas) {
  localStorage.setItem(LOCAL_STORAGE_KEY_TAREA, JSON.stringify(tareas));
}
 
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TAREA)) || [];
}
 
export {
  getContactsFromStorage,
  saveContactsToStorage,
  getTasksFromStorage,
  saveTasksToStorage
};