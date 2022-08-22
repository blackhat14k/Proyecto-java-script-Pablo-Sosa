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
const Nombre = []

 

//--------- funciones --------//

function ingreseNombre() {
    alert("hola bienvenido a lokiPC")
    let nombre 
    do {
        nombre = prompt("ingrese su nombre porfavor")
    } while (nombre ==="" || nombre === null);
    alert(`hola! ${nombre} a continuacion tendras una lista de nuestros articulos`)
    Nombre.push(nombre)
}

function agregar1(){
    let carro = ``
    Carrito.push(gamaalta)
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    }) 
    alert(`usted tiene en su carrito una pc de: ${carro}`)
}

function agregar2(){
    let carro = ``
    Carrito.push(gamamedia)
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    }) 
    alert(`usted tiene en su carrito una pc de: ${carro}`)
}

function agregar3(){
    let carro = ``
    Carrito.push(gamabaja)
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    }) 
    alert(`usted tiene en su carrito una pc de: ${carro}`)
}

function factura(nombre){
    let totalComprar = 0
    let resumen = ''
    Carrito.forEach(element => {
        totalComprar += element.precio
    })
    Carrito.forEach((element, i)  => {
        resumen += `${element.nombre} ${i+1}, costo: $${element.precio}\n `
    })
    alert(`
    Excelente ${nombre} has comprado ${Carrito.length} equipos \n
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
    Carrito.forEach((element, i) => {
        carro += ` \n ${element.nombre}, valor :$${element.precio} \n` 
    }) 
    alert(`usted tiene en su carrito una pc de: ${carro}`)
    
}

    // --------------- eventos ----------------//

//-------------- agregar/quitar--------------//

function boton1(){
    let botonAgregar = document.querySelector("computadoras.div button[id='PCgamaA']").addEventListener("click",agregar1)
}
function boton2(){
    let botonAgregar = document.querySelector("computadoras.div button[id='PCgamaB']").addEventListener("click",agregar2)
}
function boton3(){
    let botonAgregar = document.querySelector("computadoras.div button[id='PCgamaC']").addEventListener("click",agregar3)
}

//--------------- pagar -------------------//

function pagar(){
    let botonPagar = document.querySelector("pago.btn-group.botoncito button[id='pagar']").addEventListener("click",factura)
}

// -------------- vaciar carrito --------------//

function vaciar() {
    let botonVaciar = document.querySelector("pago.btn-group button[id='vaciar']").addEventListener("click",despejar)
}

//-------------- variables ----------------// 

// ingreseNombre()


  



    


