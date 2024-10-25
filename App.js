console.log("Bienvenido a Aplicaciones Matemáticas");
console.log("Ingrese una opcion [1]Serie de Fibonacci  [2]Cálculo del Factorial [3]Verificación de Números Primos [0] para salir");

function Fibonacci(n) {
    if (n>1000) {
        return;
    }

    if(n<=2){
        console.log(n)
        return Fibonacci(n + 1)
    } else{
        return Fibonacci(n-1) + Fibonacci(n-2)
    }

};

console.log(Fibonacci(0))




















//funciones