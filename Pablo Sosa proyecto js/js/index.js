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

//--------- funciones --------//

function ingreseNombre() {
    alert("hola bienvenido a lokiPC")
    do {
        nombre = prompt("ingrese su nombre porfavor")
    } while (nombre ==="" || nombre === null);
    alert(`hola! ${nombre} a continuacion tendras una lista de nuestros articulos`)
}
debugger
function carrito(){
    let x = true
    while(x == true){
        let producto = 0
        producto = prompt(`
            Nuestros productos!!!!!!! Selecciona con el numero
            1). Pc Gamer
            ${gamaalta.nombre}, ${gamaalta.grafica},${gamaalta.CPU},${gamaalta.ram},${gamaalta.almacenamiento},${gamaalta.precio}
            2). Pc Convencional
            ${gamabaja.nombre}, ${gamabaja.grafica},${gamabaja.CPU},${gamabaja.ram},${gamabaja.almacenamiento},${gamabaja.precio}
            3). Pc normal
            ${gamamedia.nombre}, ${gamamedia.grafica},${gamamedia.CPU},${gamamedia.ram},${gamamedia.almacenamiento},${gamamedia.precio}

            Presione 0 para finalizar su compra.
        `)
        if(producto == 0){
            x = false
        }else if(producto == 1){
            Carrito.push(gamaalta)
        }else if(producto == 2){
            Carrito.push(gamamedia)
        }else if(producto == 3){
            Carrito.push(gamabaja)
        }else{
            alert("solo puedes ingresar 1, 2 o 3!!! \n De lo contrario preciona 0 para salir")
        }
        
    }
}

function factura(){
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

//-------------- variables ----------------// 

// ingreseNombre()
// carrito()
// factura()

  



    


