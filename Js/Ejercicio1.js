
// 1- Escribir un programa que solicite la edad y si 
// es mayor de 18 años mostrar un mensaje que ya puede 
// conducir, si la edad ingresada no es un número 
// válido indicarlo en un mensaje.

document.writeln("Programa que determina si una persona puede conducir o no: <br>");

let edad = parseInt(prompt("Ingrese su edad: "));

do {
  alert("La edad ingresada no es valida.")
  edad = parseInt(prompt("Ingrese una edad valida: "));
} while (edad < 0);

if (edad >= 18) {
  document.writeln("La edad ingresada es: " + edad + " años. <br>");
  document.writeln("Usted ya puede conducir.");
}
else {
  document.writeln("La edad ingresada es: " + edad + " años. <br>");
  document.writeln("Usted no puede conducir.");
}
