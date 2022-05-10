import { Hospital } from './hospital.js'
import { Hotel } from './hotel.js'
import { Cine } from './cine.js'

const buttonCrearEdificio = document.getElementById('button-crear-edificio')
buttonCrearEdificio.addEventListener('click', crearEdificio)

function crearEdificio(){
    let nombreEdificio = document.getElementById('nombre-edificio').value
    let nombreEdificioFormat = nombreEdificio.toUpperCase()
    let cantPlantas = document.getElementById('pisos-edificio').value
    let supTotal = document.getElementById('superficie-edificio').value
    let tipoEdificio = document.getElementById('opciones').value
    
    console.log(nombreEdificioFormat, cantPlantas, supTotal, tipoEdificio)

    if(tipoEdificio == 'HOSPITAL'){
        crearHospital(nombreEdificioFormat, cantPlantas, supTotal)
    }
    if(tipoEdificio == 'HOTEL'){
        crearHotel(nombreEdificioFormat, cantPlantas, supTotal)
    }
    if(tipoEdificio == 'CINE'){
        crearCine(nombreEdificioFormat, cantPlantas, supTotal)
    }
}

let hospitales = []
function crearHospital(nombreEdificioFormat, cantPlantas, supTotal) {
    let pacientes = Number(prompt('Cantidad de pacientes que se encuentran internados'))
    console.log(nombreEdificioFormat, cantPlantas, supTotal, pacientes)

    const newHospital = new Hospital(nombreEdificioFormat, cantPlantas, supTotal, pacientes)

    hospitales.push(newHospital)
    console.log(hospitales)
    document.getElementById('hospitales').innerHTML = hospitales.join('').toString()
}

let hoteles = []
function crearHotel(nombreEdificioFormat, cantPlantas, supTotal) {
    let habitaciones = Number(prompt('Cantidad de habitaciones'))
    console.log(nombreEdificioFormat, cantPlantas, supTotal, habitaciones)

    const newHotel = new Hotel(nombreEdificioFormat, cantPlantas, supTotal, habitaciones)
    
    hoteles.push(newHotel)
    
    console.log(hoteles)
    document.getElementById('hoteles').innerHTML = hoteles.join('').toString()
}

let cines = []
function crearCine(nombreEdificioFormat, cantPlantas, supTotal) {
    let costoEntrada = Number(prompt('Precio de la entrada'))
    let aforoMaximo = Number(prompt('Aforo maximo'))
    console.log(nombreEdificioFormat, cantPlantas, supTotal, costoEntrada, aforoMaximo)

    const newCine = new Cine(nombreEdificioFormat, cantPlantas, supTotal, costoEntrada, aforoMaximo)
    
    cines.push(newCine)
    
    console.log(cines)
    document.getElementById('cines').innerHTML = cines.join('').toString()
}



const buttonEliminarEdificio = document.getElementById('button-eliminar-edificio')
buttonEliminarEdificio.addEventListener('click', eliminarEdificio)

function eliminarEdificio(){
    let deleteNombreEdificio = document.getElementById('nombre-edificio').value
    let deleteNombreEdificioFormat = deleteNombreEdificio.toUpperCase()
    let deleteTipoEdificio = document.getElementById('opciones').value
    let edificioEliminado = false
    if(deleteTipoEdificio == 'HOSPITAL'){
        eliminarHospital(deleteNombreEdificioFormat, edificioEliminado)
    }
    if(deleteTipoEdificio == 'HOTEL'){
        eliminarHotel(deleteNombreEdificioFormat, edificioEliminado)
    }
    if(deleteTipoEdificio == 'CINE'){
        eliminarCine(deleteNombreEdificioFormat, edificioEliminado)
    }
}

function eliminarHospital(deleteNombreEdificioFormat, edificioEliminado){
    hospitales.forEach((item, indice) => {
        if (item.Nombre == deleteNombreEdificioFormat){
            hospitales.splice(indice,1)
            edificioEliminado = true
            alert(`El hospital ${deleteNombreEdificioFormat} se elimino correctamente`)
            document.getElementById('hospitales').innerHTML = hospitales.join('').toString()  
        }
    } )
    if(!edificioEliminado){
        alert(`El hospital ${deleteNombreEdificioFormat} no se encuentra en la base de datos`)
    }
}

function eliminarHotel(deleteNombreEdificioFormat, edificioEliminado){
    hoteles.forEach((item, indice) => {
        if (item.Nombre == deleteNombreEdificioFormat){
            hoteles.splice(indice,1)
            edificioEliminado = true
            alert(`El hotel ${deleteNombreEdificioFormat} se elimino correctamente`)
            document.getElementById('hoteles').innerHTML = hoteles.join('').toString()  
        }
    } )
    if(!edificioEliminado){
        alert(`El hotel ${deleteNombreEdificioFormat} no se encuentra en la base de datos`)
    }
}

function eliminarCine(deleteNombreEdificioFormat, edificioEliminado){
    cines.forEach((item, indice) => {
        if (item.Nombre == deleteNombreEdificioFormat){
            cines.splice(indice,1)
            edificioEliminado = true
            alert(`El cine ${deleteNombreEdificioFormat} se elimino correctamente`)
            document.getElementById('cines').innerHTML = cines.join('').toString()  
        }
    } )
    if(!edificioEliminado){
        alert(`El cine ${deleteNombreEdificioFormat} no se encuentra en la base de datos`)
    }
}


const buttonMostrarEdificio = document.getElementById('button-mostrar-edificio')
buttonMostrarEdificio.addEventListener('click', mostrarEdificio)

function mostrarEdificio(){
    let mostrarNombreEdificio = document.getElementById('nombre-edificio').value
    let mostrarNombreEdificioFormat = mostrarNombreEdificio.toUpperCase()
    let mostrarTipoEdificio = document.getElementById('opciones').value
    let edificioMostrado = false
    if(mostrarTipoEdificio == 'HOSPITAL'){
        mostrarHospital(mostrarNombreEdificioFormat, edificioMostrado)
    }
    if(mostrarTipoEdificio == 'HOTEL'){
        mostrarHotel(mostrarNombreEdificioFormat, edificioMostrado)
    }
    if(mostrarTipoEdificio == 'CINE'){
        mostrarCine(mostrarNombreEdificioFormat, edificioMostrado)
    }
}

function mostrarHospital(mostrarNombreEdificioFormat, edificioMostrado){
    hospitales.forEach((item, indice) => {
        if (item.Nombre == mostrarNombreEdificioFormat){
            edificioMostrado = true
            document.getElementById('mostrar-edificio').innerHTML = `${hospitales[indice].toString()} <br>
                                                                     ${hospitales[indice].repartirAlmuerzo()} <br><br>
                                                                     ${hospitales[indice].limpiar()} <br><br>
                                                                     ${hospitales[indice].calcularCostVigilancia()}`
        }
    } )
    if(!edificioMostrado){
        alert(`El hospital ${mostrarNombreEdificioFormat} no se encuentra en la base de datos`)
    }
}

function mostrarHotel(mostrarNombreEdificioFormat, edificioMostrado){
    hoteles.forEach((item, indice) => {
        if (item.Nombre == mostrarNombreEdificioFormat){
            edificioMostrado = true
            document.getElementById('mostrar-edificio').innerHTML = `${hoteles[indice].toString()} <br>
                                                                     ${hoteles[indice].calcularMantenimiento()} <br><br>
                                                                     ${hoteles[indice].limpiar()} <br><br>
                                                                     ${hoteles[indice].calcularCostVigilancia()}`
        }
    } )
    if(!edificioMostrado){
        alert(`El hotel ${mostrarNombreEdificioFormat} no se encuentra en la base de datos`)
    }
}

function mostrarCine(mostrarNombreEdificioFormat, edificioMostrado){
    cines.forEach((item, indice) => {
        if (item.Nombre == mostrarNombreEdificioFormat){
            edificioMostrado = true
            
            document.getElementById('mostrar-edificio').innerHTML = `${cines[indice].toString()} <br>
                                                                     ${cines[indice].limpiar()} <br><br>
                                                                     ${cines[indice].calcularCostVigilancia()} <br><br>
                                                                     ${cines[indice].proyectarSesion()}`                                                   
        }
    } )
    if(!edificioMostrado){
        alert(`El cine ${mostrarNombreEdificioFormat} no se encuentra en la base de datos`)
    }
}
