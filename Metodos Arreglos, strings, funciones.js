let arr = [1,2,3] 
let str = 'como estas, bien que?'
let frutas = ['manzana','pera', 'uva', 'naranja','mango']
let result1
let result2

/* 
arr = [1,2,3] 
result1 = arr.() // 
console.log('devulve:'+result1, arr);
*/


// ----* ARREGLOS *----
// Agrega un elemento al final del arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.push(9) 
result2 = frutas.push('d') 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// Agrega un elemento al inicio del arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.unshift(0) 
result2 = frutas.unshift(0)
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// elimina un elemento al final del arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.pop() 
result2 = frutas.pop()
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// elimina un elemento al inicio del arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.shift() 
result2 = frutas.shift() 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

 // invierte el arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.reverse()
result2 = frutas.reverse() 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// Transforma un arrereglo en string
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.join('') 
result2 = frutas.join('|') 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// Busca un valor en el arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.indexOf(2) 
result2 = frutas.indexOf('naranja')
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// mira si el arreglo tiene coincidencias con la informacion pasada
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.includes(5) // 
result2 = frutas.includes('uva') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

//busca y saca la informacion primer parametro es el indice o la info a buscar, 2do parametro es la cantidad de elemento despues de ese puede ser negativo
arr = [1,2,3,5,8,7,4] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.splice(3, 3) // 
result2 = frutas.splice(1,1) // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

//genera una copia del arreglo
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.slice(',') // 
result2 = frutas.slice(',') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// busca el indice de elemento que se paresca o cumpla la condicion
arr = [1,2,3,6,8] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.findIndex((ele) => ele > 7) // 
result2 = frutas.findIndex((ele) => ele == 'naranja') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

// busca y trae la primera coincidencia que cumpa con la condicion
arr = [1,2,3,6,8] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.find((ele) => ele > 5) // 
result2 = frutas.find((ele) => ele == 'naranja') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

//devuelve booleano validando si todos son la misma informacion
arr = [1,2,3,6,8] 
frutas = ['manzana','manzana','manzana','manzana'];
result1 = arr.every((ele) => ele == 2) // 
result2 = frutas.every((ele) => ele == 'manzana') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

//devuelve booleano validando si contiene almenos una informacion
arr = [2,2,2,2,2,2,2,2,2,] 
frutas = ['manzana','naranja','manzana','manzana'];
result1 = arr.some((ele) => ele === 5) // 
result2 = frutas.some((ele) => ele == 'naranja') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

//llena toda la informacacion del arreglo ya sea remplazandola o llenando la informacion que esta vacia
arr = [2,2,2,2,2,2,2,2,2,] 
frutas = ['manzana','naranja','manzana','manzana'];
result1 = arr.fill(5) // 
result2 = frutas.fill('naranja') // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);


// ----* CADENAS *----
// Transformar de string a arreglo
str = 'como estas, BIEN O QUE?'
result1 = str.split(',') // 
console.log(result1, typeof result1);
console.log(str);

//tranforma el string en minusculas
str = 'como estas, BIEN O QUE?'
result1 = str.toLowerCase() // 
console.log(result1);
console.log(str);

//tranforma el string en mayusculas
str = 'como estas, BIEN O QUE?'
result1 = str.toUpperCase() // 
console.log(result1);
console.log(str);

//cambia  o remplaza el string 
str = 'como estas, BIEN O QUE?'
result1 = str.replace('como', 'hola Como') // 
console.log(result1);
console.log(str);

//genera un nuevo string con la informacion cortada, el primer paramato es la cantidad de letras que se debe empezar a cortar y el 2do parametro es cuando para de cortar
str = 'como estas, BIEN O QUE?'
result1 = str.slice(2, -3) // 
console.log(result1);
console.log(str);

//busca el indice de la palabra o lo que se desee buscar
str = 'como estas, BIEN O QUE?'
result1 = str.indexOf('tas') // 
console.log(result1);
console.log(str);

// quita los espacios al inicio y al final
str = ' como estas, BIEN O QUE? '
result1 = str.trim() // 
console.log(result1.length);
console.log(str.length);









arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.includes() // 
result2 = frutas.includes() // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.includes() // 
result2 = frutas.includes() // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);
arr = [1,2,3] 
frutas = ['manzana','pera', 'uva', 'naranja','mango'];
result1 = arr.includes() // 
result2 = frutas.includes() // 
console.log(result1, typeof result1);
console.log(result2, typeof result2)
console.log(arr, frutas);

