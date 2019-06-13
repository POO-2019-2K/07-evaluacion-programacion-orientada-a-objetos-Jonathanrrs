import Agenda from "./Agenda.js";
import Tarea from "./Tarea.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"));
        document.querySelector("#btn").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() === true) {
                let nombre = document.querySelector("#nombre").value;
                let sFecha = document.querySelector("#fecha").value;
                sFecha = sFecha.split("-");
                let fecha = new Date(sFecha[0], sFecha[1] - 1, sFecha[2]);
               
                let objTarea = {
                    nombre:  nombre,
                    fecha: fecha
                }
                
                let tarea = new Tarea(objTarea);
                agenda.addTarea(tarea);
            }
        });
        document.querySelector("#btnAlfa").addEventListener("click",() => {
            agenda.mostrarAlfa();
        });
        document.querySelector("#btnNum").addEventListener("click", () => {
            agenda.mostrarNum();
        });
    }
}
let m = new Main();