import Tarea from "./Tarea.js";
export default class Agenda {
    constructor(tablaAgenda) {
        this._tablaAgenda = tablaAgenda;
        this._tareas = [];
       
    }
    
    _showInTable(tarea) {
        let row = this._tablaAgenda.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellFecha = row.insertCell(1);
   
        cellNombre.innerHTML = tarea.nombre;
        cellFecha.innerHTML = tarea.getFecha();

        let objTarea = {
            nombre: tarea.nombre,
            fechaNac: tarea.fecha
        }
        this._tareas.push(objTarea);
    }

    addTarea(tarea) {
        this._showInTable(tarea);
        
    }
   
}
