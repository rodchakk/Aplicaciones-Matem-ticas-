console.log("Bienvenido a Aplicaciones Matemáticas");
console.log("Ingrese una opcion [1]Serie de Fibonacci  [2]Cálculo del Factorial [3]Verificación de Números Primos [0] para salir");
























//funciones


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
    







