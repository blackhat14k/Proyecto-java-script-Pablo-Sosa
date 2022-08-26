// debugger
//---------- objeto ----------//

class Producto {
    constructor(nombre, grafica, CPU, ram, almacenamiento, precio) {
        this.nombre = nombre
        this.grafica = grafica
        this.CPU = CPU
        this.ram = ram
        this.almacenamiento = almacenamiento
        this.precio = precio
    }
}

let gamaalta = new Producto("gamaalta", "rtx3080", "i9","32gb", "5tb", 40000)
let gamamedia = new Producto("gamamedia", "rtx2070", "i5","16gb", "2tb", 30000)
let gamabaja = new Producto("gamabaja", "gtx2040", "i3","8gb", "1tb", 25000)

//----------- array -----------//
const articulos = [gamaalta, gamabaja, gamamedia]
const Carrito =[]

//----------- login -----------//

const ingreseNombre = () =>{
    let inputName = document.getElementById("Name").value
    sessionStorage.setItem('nombre', inputName)
}
let Nombre = sessionStorage.getItem("nombre")


//--------- funciones --------//

function agregar1(){
    let carro = ``
    Carrito.push(gamaalta)
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n`
    })
    localStorage.setItem("pc", JSON.stringify(Carrito))
}

function agregar2(){
    let carro = ``
    Carrito.push(gamamedia)
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    })
    localStorage.setItem("pc", JSON.stringify(Carrito))
}


function agregar3(){
    let carro = ``
    Carrito.push(gamabaja)
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    })
    localStorage.setItem("pc", JSON.stringify(Carrito))
    
}

function factura(){
    let totalComprar = 0
    let resumen = ''
        if(resumen == ''){
            let deposito = JSON.parse(localStorage.getItem("pc"))
            deposito.forEach(deposito =>{
                Carrito.push(deposito)
            })
    }
    Carrito.forEach(element => {
        totalComprar += element.precio
    })
    Carrito.forEach((element, i)  => {
        resumen += `${element.nombre} ${i+1}, costo: $${element.precio}\n `
    })

    

    alert(`
    Excelente ${Nombre} has comprado ${Carrito.length} equipos \n
    Resumen:
    ${resumen} 
    ------------------------------------------------------------------
    Total a pagar: ${totalComprar}`)
}
    
    


function despejar(){
    Carrito.splice(length)
    alert("ha vaciado su carro")
}

function Quitar(){
    let carro = ''
    Carrito.pop()
    localStorage.setItem("pc", JSON.stringify(Carrito))
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    }) 
    
    
}

    // --------------- eventos ----------------//

//-------------- agregar/quitar--------------//

function boton1(){
    let botonAgregar = document.querySelector("computadoras.div.div button[id='PCgamaA']").addEventListener("click",agregar1)
}
function boton2(){
    let botonAgregar = document.querySelector("computadoras.div.div button[id='PCgamaB']").addEventListener("click",agregar2)
}
function boton3(){
    let botonAgregar = document.querySelector("computadoras.div.div button[id='PCgamaC']").addEventListener("click",agregar3)
}
function quitar(){
    let botonQuitar = document.querySelector("computadoras.div.div button[id='Sacar']").addEventListener("click", Quitar)
}
//--------------- pagar -------------------//

function pagar(){
    let botonPagar = document.querySelector("computadoras. button[id='pagar']").addEventListener("click",factura)
}

// -------------- vaciar carrito --------------//

// function vaciar() {
//     let botonVaciar = document.querySelector("pago.btn-group button[id='vaciar']").addEventListener("click",despejar)
// }




    









// function ingreseNombre() {
//     alert("hola bienvenido a lokiPC")
//     let nombre 
//     do {
//         nombre = prompt("ingrese su nombre porfavor")
//     } while (nombre ==="" || nombre === null);
//     alert(`hola! ${nombre} a continuacion tendras una lista de nuestros articulos`)
//     sessionStorage.setItem('saludo', nombre)
// }
