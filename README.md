# Aplicaciones-Matematicas-

1. Secuencia Fibonacci
La secuencia Fibonacci consiste en una suma infinita de números donde el siguiente número es la suma del número actual y del número anterior empezando por cero. La excepción de esto son los primeros dos números (0 y 1) ya que no hay números anteriores a los que sumar. A esto se le llama "Caso Base". A partir de ese punto, sigue la secuencia donde el número siguiente es la suma del número actual y del número anterior.

En nuestro código, creamos la Función Fibonacci donde el código identifica el Caso Base y le indica que retorne los valores de 0 y 1 cuando n tenga ese valor. Una vez pasado estos dos números, la función se llama asi misma retornando la suma de n-1 y n-2. Al ser la Secuencia Fibonacci infinita, utilizamos un ciclo for para que se repita de manera limitada. En este caso, lo limitamos a 25 secuencias para que pueda detenerse. 
