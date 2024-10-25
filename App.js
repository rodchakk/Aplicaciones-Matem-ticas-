console.log();
console.log("Bienvenido a Aplicaciones Matemáticas");
console.log("Ingrese una opcion [1]Serie de Fibonacci  [2]Cálculo del Factorial [3]Verificación de Números Primos [0] para salir");
console.log();

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




















//funciones