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
        this._borrar(row, tarea);

        let objTarea = {
            nombre: tarea.nombre,
            fecha: tarea.fecha
        }
        this._tareas.push(objTarea);
    }

    //Agregar tarea
    addTarea(tarea) {
        let found = this._findTarea(tarea.nombre);
        if (found >= 0) {
            Swal.fire({
                type: "error",
                tittle: "Error",
                text: "La tarea ya existe"
            });
            return;
        }
        this._showInTable(tarea);
        localStorage.setItem("tareas", JSON.stringify(this._tareas));
    }


    //Borrar fila//
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
    //Ordenar alfabeticamente//
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
    //Ordenar numericamente//
    _compararNum(a, b) {
        if (a.fecha < b.fecha) {
            return -1;
        }
        if (a.fecha > b.fecha) {
            return 1;
        }
        return 0;
    }
    _num() {
        this._tareas.sort(this._compararNum);
    }
    mostrarNum() {
        this._tareas.sort(this._compararNum);
        localStorage.setItem("tareas", JSON.stringify(this._tareas));
        location.reload();
    }

    //Encontrar tarea
    _findTarea(nombre) {
        let foundAt = -1;
        this._tareas.forEach((e, index) => {
            if (e.nombre === nombre) {
                foundAt = index;
                return;
            }
        });
        return foundAt;
    }







}
