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
const gamabaja = new Producto("gamabaja", "gtx 1660s", "i3","8gb", "1tb", 25000)


let botonAgregar = document.getElementById("PCgamaA").addEventListener('click',() => agregar(gamaalta))
let botonAgregar2 = document.getElementById("PCgamaB").addEventListener('click',() => agregar(gamamedia))
let botonAgregar3 = document.getElementById("PCgamaC").addEventListener('click',() => agregar(gamabaja))

//----------- array -----------//
const articulos = [gamaalta, gamabaja, gamamedia]
let Carrito = JSON.parse(localStorage.getItem('pc'))?JSON.parse(localStorage.getItem('pc')): []
preFactura()

//----------- login -----------//    
function ingreseNombre(){
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          if (!login) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login}
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
        `.trim())
      })
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
    let totalComprar = 0
    let resumen = ''
    Carrito.forEach((element, i) => {
        resumen += `${element.nombre} ${i+1}, costo: $${element.precio}\n `
        totalComprar += element.precio
    })
        Swal.fire({
            icon:'success',
            title:'Excelente! has comprado',
            text: resumen,
            

        
    
    })    

}

// alert(`
// Excelente ${Nombre} has comprado ${Carrito.length} equipos \n
// Resumen:
// ${resumen} 
// ------------------------------------------------------------------
// Total a pagar: ${totalComprar}`)



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
