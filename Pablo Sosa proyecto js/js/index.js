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

//----------------- var/const -----------------//

const gamaalta = new Producto("gamaalta", "rtx3080", "i9","32gb", "5tb", 40000)
const gamamedia = new Producto("gamamedia", "rtx2070", "i5","16gb", "2tb", 30000)
const gamabaja = new Producto("gamabaja", "gtx2040", "i3","8gb", "1tb", 25000)
let botonAgregar = document.getElementById("PCgamaA").addEventListener("click",() => agregar(gamaalta))
let botonAgregar2 = document.getElementById("PCgamaB").addEventListener("click",() => agregar(gamamedia))
let botonAgregar3= document.getElementById("PCgamaC").addEventListener("click",() => agregar(gamabaja))

//----------- array -----------//
const articulos = [gamaalta, gamabaja, gamamedia]
let Carrito =[]
Carrito = JSON.parse(localStorage.getItem('pc'))
preFactura()

//----------- login -----------//

const ingreseNombre = () =>{
    let inputName = document.getElementById("Name").value
    sessionStorage.setItem('nombre', inputName)
}
let Nombre = sessionStorage.getItem("nombre")


//--------- funciones --------//

function agregar(pc){
    Carrito.push(pc)
    localStorage.setItem("pc", JSON.stringify(Carrito))
    preFactura()
}

function preFactura(){
    let texto = ''
    Carrito.forEach((element, i) => {
        texto += `<div class="contenedorDetalleFactura"><span>${element.nombre}</span><span>${element.precio}$</span><button value="${i}" class="delete">X</button></div>`
    })
    document.querySelector(".factura").innerHTML = texto
    let arr = document.querySelectorAll('.delete')
    arr.forEach(element => {
        element.addEventListener("click",(event)=>Quitar(event),true)
    })
}

function factura(){
    let totalComprar = 0
    let resumen = ''
    Carrito.forEach((element, i) => {
        resumen += `${element.nombre} ${i+1}, costo: $${element.precio}\n `
        totalComprar += element.precio
    })
    

    

    alert(`
    Excelente ${Nombre} has comprado ${Carrito.length} equipos \n
    Resumen:
    ${resumen} 
    ------------------------------------------------------------------
    Total a pagar: ${totalComprar}`)
}
    
    


function despejar(){
    Carrito = []
    alert("ha vaciado su carro")
}

function Quitar(event){

    Carrito.splice(event.target.value,1)
    localStorage.setItem("pc", JSON.stringify(Carrito))
    preFactura()
}

    // --------------- eventos ----------------//

//-------------- agregar/quitar--------------//



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
