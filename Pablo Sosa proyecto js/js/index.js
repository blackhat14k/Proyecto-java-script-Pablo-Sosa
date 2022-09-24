
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
const gamabaja = new Producto("gamabaja", "gtx 1660s", "i3","8gb", "1tb", 25000)


let botonAgregar = document.getElementById("PCgamaA").addEventListener('click',() => agregar(gamaalta))
let botonAgregar2 = document.getElementById("PCgamaB").addEventListener('click',() => agregar(gamamedia))
let botonAgregar3 = document.getElementById("PCgamaC").addEventListener('click',() => agregar(gamabaja))

//----------- array -----------//
const articulos = [gamaalta, gamabaja, gamamedia]
let Carrito = JSON.parse(localStorage.getItem('pc'))?JSON.parse(localStorage.getItem('pc')): []
preFactura() 



//----------------- login -----------------------//

function recibir(){
    let newUser = document.getElementById("Name").value
    localStorage.setItem("usuario nuevo",newUser)
    
}




//--------- funciones --------//


function agregar(pc){
    Carrito.push(pc)
    localStorage.setItem("pc", JSON.stringify(Carrito))
    preFactura()
}

function preFactura(){
    let texto = ''
    Carrito.forEach((element, i) => {
        texto += `<div class="contDetalleFactura"><span>${element.nombre}</span><span>${element.precio}$</span><button value="${i}" class="delete">X</button></div>`
    })
    document.querySelector(".factura").innerHTML = texto
    let arr = document.querySelectorAll('.delete')
    arr.forEach(element => {
        element.addEventListener("click",(event)=>Quitar(event))
    })
}

function factura(){
    let user = (localStorage.getItem('usuario nuevo'))
    console.log(user)
    let totalComprar = 0
    let resumen = ''
    Carrito.forEach((element, i) => {
        resumen += `${element.nombre} ${i+1}, costo: $${element.precio}\n `
        totalComprar += element.precio
    })
        Swal.fire({
            icon:'success',
            title:`Excelente! ${user} has comprado`,
            text: resumen,
    
    })    

}


function Quitar(event){
    Carrito.splice(event.target.value,1)
    localStorage.setItem("pc", JSON.stringify(Carrito))
    preFactura()
}

