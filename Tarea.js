export default class Tarea {
    constructor(tarea) {
        this._nombre = tarea.nombre.toUpperCase();
        this._fecha = tarea.fecha;
        this._mes = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
          ];
    }
    get nombre() {
        return this._nombre;
    }
    get fecha() {
        return this._fecha;
    }
    getFecha() {
        let fecha = this._fecha.getDate() + "/" + this._mes[this._fecha.getMonth()] + "/" + this._fecha.getFullYear();
        return fecha;
    }
    getDias() {
        let oneDay = 24 * 60 * 60 * 1000;
        let difference = this._fecha-new Date();
        let edad = Math.trunc(difference / oneDay)+1;
        console.log(edad)
        return edad;
    }
}