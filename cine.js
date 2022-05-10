import { Edificios } from './edificios.js'
export class Cine extends Edificios{
    #precioEntrada
    #aforoMaximo

    constructor(nombre, numDePlantas, superficie, precioEntrada, aforoMaximo){  
        super(nombre, numDePlantas, superficie)
        this.#precioEntrada = precioEntrada
        this.#aforoMaximo = aforoMaximo
    }

    get PrecioEntrada(){
        return this.#precioEntrada
    }
    get AforoMaximo(){
        return this.#aforoMaximo
    }

    proyectarSesion(){
        let canEspectadores = prompt('Ingrese la cantidad de espectadores')
        if(canEspectadores > this.AforoMaximo){
            alert('Los expectadores superan el aforo maximo')
            canEspectadores = prompt('Ingrese la cantidad de espectadores')
        }
        let recaudacion = this.PrecioEntrada*canEspectadores
        return `La recaudacion fue de $${recaudacion.toFixed(2)}`
    }

    calcularCostVigilancia(){
        const SUP_CONTROL_VIG = 3000
        const COSTO_VIG = 1300
        let cantVigilantes = Math.ceil(this.Superficie/SUP_CONTROL_VIG)
        let costoVig = cantVigilantes*COSTO_VIG 

        return `Se necesita ${cantVigilantes} vigilantes para la seguridad del edificio con un costo de $${costoVig} x mes`
    }


    toString(){
        return `<br>Cine: ${this.nombre}<br>
                    Pisos: ${this.numDePlantas}<br>
                    Suèrficie(m2): ${this.superficie}<br>
                    Precio Entrada: $${this.#precioEntrada}<br>
                    Aforo Maximo: ${this.#aforoMaximo} <br>`
    }
}