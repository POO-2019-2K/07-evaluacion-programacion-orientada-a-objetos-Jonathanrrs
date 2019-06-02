import Tarea from "./Tarea.js";
export default class Agenda {
    constructor(tablaAgenda) {
        this._tablaAgenda = tablaAgenda;
        this._tareas = [];
        this._initTables();
        //localStorage.removeItem("tareas");
    }
    _initTables() {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        if (tareas === null) {
            return;
        }
        tareas.forEach((tarea, index) => {
            tarea.fecha = new Date(tarea.fecha);
            this._showInTable(new Tarea(tarea));
        });
    }
    _showInTable(tarea) {
        let row = this._tablaAgenda.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellFecha = row.insertCell(1);
        let cellDias = row.insertCell(2);
   
        cellNombre.innerHTML = tarea.nombre;
        cellFecha.innerHTML = tarea.getFecha();
        cellDias.innerHTML = tarea.getDias();

        let objTarea = {
            nombre: tarea.nombre,
            fecha: tarea.fecha
        }
        this._tareas.push(objTarea);
    }

    addTarea(tarea) {
        this._showInTable(tarea);
        localStorage.setItem("tareas", JSON.stringify(this._tareas));
    }
   
}
