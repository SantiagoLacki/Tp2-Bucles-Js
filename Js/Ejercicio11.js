
// 11- Realiza un script que pida por teclado 
// 3 edades y 3 nombres e indique el nombre 
// del mayor. *
// Nota: ver funcion Math() 
// https://www.w3schools.com/js/js_math.asp

let edad1;
let edad2;
let edad3;

let nombre1;
let nombre2;
let nombre3;

let edadMayor = "";
let nombreMayor = 0;

nombre1 = prompt("Ingrese el nombre de la 1ra persona: ");
edad1 = parseInt(prompt("Ingrese la edad de la 1ra persona: "));
nombre2 = prompt("Ingrese el nombre de la 2da persona: ");
edad2 = parseInt(prompt("Ingrese la edad de la 2ra persona: "));
nombre3 = prompt("Ingrese el nombre de la 3ra persona: ");
edad3 = parseInt(prompt("Ingrese la edad de la 3ra persona: "));

edadMayor = Math.max(edad1,edad2,edad3)
if (edadMayor === edad1) {
  document.writeln("El mayor es: ", nombre1, " con ", edadMayor, " años.")
}
else if (edadMayor === edad2) {
  document.writeln("El mayor es: ", nombre2, " con ", edadMayor, " años.")
}
else {
  document.writeln("El mayor es: ", nombre3, " con ", edadMayor, " años.")
}
