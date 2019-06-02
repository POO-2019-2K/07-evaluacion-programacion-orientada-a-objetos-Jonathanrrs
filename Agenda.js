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
        row.insertCell(3);
   
        cellNombre.innerHTML = tarea.nombre;
        cellFecha.innerHTML = tarea.getFecha();
        cellDias.innerHTML = tarea.getDias();
        this._borrar(row,tarea);

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

    _borrar(row, tarea) {
        let btnBorrar = document.createElement("input");
        btnBorrar.type = "button";
        btnBorrar.value = "Borrar";
        btnBorrar.className = "btn btn-danger";
        row.cells[3].innerHTML = "";
        row.cells[3].appendChild(btnBorrar);
        btnBorrar.addEventListener("click", () => {
            this._borrarRow(tarea);
            
        });
    }

    _borrarRow(tarea) {
        this._tareas = JSON.parse(localStorage.getItem("tareas"));
        this._tareas.forEach((e, index) => {
            if (e.nombre === tarea.nombre) {
                this._tareas.splice(index, 1);
            }
        });
        location.reload();
        localStorage.setItem("tareas", JSON.stringify(this._tareas));
    }

    _compararAlfa(a, b) {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    }
    _alfa() {
        this._tareas.sort(this._compararAlfa);
    }
    mostrarAlfa() {
        this._tareas.sort(this._compararAlfa);
        localStorage.setItem("tareas", JSON.stringify(this._tareas));
        location.reload();
    }





   
   
}
