import { Edificios } from './edificios.js'
export class Hotel extends Edificios {
    #canHabitaciones
    constructor(nombre, numDePlantas, superficie, canHabitaciones){  
        super(nombre, numDePlantas, superficie)
        this.#canHabitaciones = canHabitaciones
    }

    get CanHabitaciones(){
        return this.#canHabitaciones
    }
    
    calcularMantenimiento(){
        const HABIT_XPERSONAL = 20
        const SUELDO_PERSONAL = 1000
        let cantPersonal = Math.ceil(this.CanHabitaciones/HABIT_XPERSONAL) //ceil = devuleve el entero mayor
        let costoTotal = cantPersonal*SUELDO_PERSONAL
        return `Se necesitan ${cantPersonal} personas para mantener el hotel con un costo de $${costoTotal} x mes`
    }

    calcularCostVigilancia(){
        const SUP_CONTROL_VIG = 1000
        const PLUS_PELIGROSIDAD = 500
        const COSTO_VIG = 1300 + PLUS_PELIGROSIDAD
        let cantVigilantes = Math.ceil(this.Superficie/SUP_CONTROL_VIG)
        let costoVig = cantVigilantes*COSTO_VIG 

        return `Se necesita ${cantVigilantes} vigilantes para la seguridad del edificio con un costo de $${costoVig} x mes`
    }


    toString(){
        return `<br>Hotel: ${this.nombre}<br>
                    Pisos: ${this.numDePlantas}<br>
                    Suèrficie(m2): ${this.superficie}<br>
                    Cant. Habitaciones: ${this.#canHabitaciones}<br>`
    }
}