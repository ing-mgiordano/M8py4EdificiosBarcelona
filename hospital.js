import { Edificios } from './edificios.js'
export class Hospital extends Edificios{
    #canDeEnfermos

    constructor(nombre, numDePlantas, superficie, canDeEnfermos){  
        super(nombre, numDePlantas, superficie)
        this.#canDeEnfermos = canDeEnfermos  
    }

    get CanDeEnfermos(){
        return this.#canDeEnfermos
    }
    set CanDeEnfermos(canDeEnfermos){
        this.#canDeEnfermos = canDeEnfermos
    }

    repartirAlmuerzo(){
        return `Se estan repartiendo ${this.CanDeEnfermos} raciones`
    }

    toString(){
        return `<br>Hospital: ${this.nombre}<br>
                    Pisos: ${this.numDePlantas}<br>
                    Suèrficie(m2): ${this.superficie}<br>
                    Pacientes internados: ${this.#canDeEnfermos}<br>`
    }
}
