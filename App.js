console.log();
console.log("Bienvenido a Aplicaciones Matemáticas");
console.log("Ingrese una opcion [1]Serie de Fibonacci  [2]Cálculo del Factorial [3]Verificación de Números Primos [0] para salir");
console.log();










// main


//Funciones
//Función Fibonacci 
function Fibonacci(n) {
    if (n===0){
        return 0;
    } else if(n===1){
        return 1;
    }
        return Fibonacci(n-1) + Fibonacci(n-2)
}

for (let f=0; f<25; f++) {

    console.log(Fibonacci(f));

}


// Cálculo del Factorial  
function factorial(n) {  
    if (n < 0) {  
        return "No se puede calcular el factorial de un número negativo.";  
    } else if (n === 0 || n === 1) {  
        return 1;  
    } else {  
        return n * factorial(n - 1);  
    }  
} 

// Números Primos  
function primo(n){

if(n>=20) 
    {
    return;
}


let residuo = n % 2;
let residuo2 = n % 3;
let residuo3 = n % 7;

if (n > 1 && residuo !== 0 && residuo2 !== 0 && residuo3 !== 0) {
    console.log(n + " es primo");
} else if (n > 1) {
    console.log(n + " no es primo");
}

primo(n+1);


 }
    
// Función qe menú  
 function Menu(opcion) {  
    switch (opcion) {  
        case '1':  
            console.log("Serie de Fibonacci:");  
            for (let f = 0; f < 25; f++) {  
                console.log(Fibonacci(f));  
            }  
            break;  
        case '2':  
        readline.question('Ingrese un número para calcular su factorial: ', num => {  
            const numeroFactorial = parseInt(num);  
            console.log(`El factorial de ${numeroFactorial} es: ${factorial(numeroFactorial)}`);  
            Opciones(); // Vuelve a solicitar las opciones
        });  
        return;  
        case '3':  
            readline.question('Ingrese un número para verificar si es primo: ', num => {  
                const numeroPrimo = parseInt(num);  
                console.log(`${numeroPrimo} es primo: ${primo(numeroPrimo)}`);  
                Opciones(); 
            });  
            return; 
        case '0':  
            console.log("Cerrando el programa...");  
            process.exit(); // Termina de ejecutar el programa  
            break;  
        default:  
            console.log("Opción no válida, ingrese una opción correcta.");  
            break;  
    }  
}  

// Ejecución del programa  
const readline = require('readline').createInterface({  
    input: process.stdin,  
    output: process.stdout  
});  

function Opciones() {  
    readline.question('Ingrese su opción: ', opcion => {  
        Menu(opcion);  
        Opciones(); //Solicita nuevamente las opciones
    });  
}  

// Inicio de las opciones  
Opciones();  






