export default class Tarea {
    constructor(tarea) {
        this._nombre = tarea.nombre.toUpperCase();
        this._fecha = new Date(tarea.fecha);
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
        let difference = this._fecha - new Date();
        let edad = Math.trunc(difference / oneDay);
        console.log(edad)
        return edad+1;
    }

    _getNumberAs2Digits(number) {
        if(number < 10) {
          return "0"+number;
        }
        return number;
      }

      getDiasForDate() {
        let {fecha} = this;
        let date = fecha.getFullYear() + "-" +  this._getNumberAs2Digits(fecha.getMonth()+1) + "-" + fecha.getDate();
        return date;
      }

    
}