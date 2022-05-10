export class Edificios {
    nombre
    numDePlantas
    superficie

    constructor(nombre, numDePlantas, superficie){
        this.nombre = nombre
        this.numDePlantas = numDePlantas
        this.superficie = superficie
    }

    get Nombre(){
        return this.nombre
    }
    get NumDePlantas(){
        return this.numDePlantas
    }
    get Superficie(){
        return this.superficie
    }

    limpiar(){
        const TIEMPO_LIMPIEZA_M2 = 5
        const DIAS_LIMPIEZA = 30
        let tiempoLimpiezaTotal = this.Superficie/TIEMPO_LIMPIEZA_M2
        for (let i = 0; i < this.NumDePlantas; i++){
            tiempoLimpiezaTotal += 0.5
        }
        let costoLimpiezaxdia = tiempoLimpiezaTotal
        let costoLiempiezaTotal = costoLimpiezaxdia * DIAS_LIMPIEZA

        return `El tiempo de limpieza del edificio es: ${tiempoLimpiezaTotal} minutos x dia, con un costo x mes de: $${costoLiempiezaTotal}`
    }
    calcularCostVigilancia(){
        const SUP_CONTROL_VIG = 1000
        const COSTO_VIG = 1300
        let cantVigilantes = Math.ceil(this.Superficie/SUP_CONTROL_VIG)
        let costoVig = cantVigilantes*COSTO_VIG 

        return `Se necesita ${cantVigilantes} vigilantes para la seguridad del edificio con un costo de $${costoVig} x mes`
    }
}
