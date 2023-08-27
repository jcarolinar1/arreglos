/* De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/


let array = [10, 40, 30, 20, 15, 5];

array.sort(function(a, b) {
  return a - b;});

let min = Math.min(array);
let max = Math.max(array);

alert("El arreglo ordenado de menor a mayor es: " + array);
