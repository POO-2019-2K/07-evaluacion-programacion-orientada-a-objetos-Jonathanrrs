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
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._fechaNac;
        let edad = Math.trunc(differenceMs / oneYear);
        return edad;
    }
}