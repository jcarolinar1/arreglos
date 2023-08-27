
/*1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.*/



let Aleatorio = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random()* 100);
  Aleatorio.push(num);
}
alert(Aleatorio);