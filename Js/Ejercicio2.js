
// 2- Escribir un programa que solicite una nota (número) 
// de 0  a 10. Luego mostrar la calificación en un alert 
// según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 
// mostrar un mensaje de “número erróneo”. Si el número ingresado 
// no es válido mostrar el mensaje “Introduce un número válido”.
// Ejemplo:
// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

// document.writeln("Programa que determina la calificacion de la nota de un examen: <br>");

let nota;
let verificacion = false;
let calificacion = ""

do  {
  nota = prompt("Ingrese la nota del examen (0-10):");
  nota = Number(nota);

  if (isNaN(nota)) {
    alert("Introduce un número válido")
  }

  else if (nota < 0 || nota > 10) {
    alert("Numero erroneo.");
  }

  else {
    verificacion = true;
    if (nota == 0 || nota == 1 || nota == 2) {
      calificacion += "Muy deficiente";
    }
    if (nota == 3 || nota == 4) {
      calificacion += "Insuficiente";
    }
    if (nota == 5 || nota == 6) {
      calificacion += "Suficiente";
    }
    if (nota == 7) {
      calificacion += "Bien";
    }
    if (nota == 8 || nota == 9) {
      calificacion += "Notable";
    }
    if (nota == 10) {
      calificacion += "Sobresaliente";
    }
    alert("Nota: " + nota + " - " + calificacion);
  }
}
while (!verificacion);

