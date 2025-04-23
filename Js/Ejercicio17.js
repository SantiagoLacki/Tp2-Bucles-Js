
// 17- Realiza un script que muestre la posición 
// de la primera vocal de un texto introducido 
// por teclado.
// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1

const texto = prompt("Ingrese un texto corto: ");

for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u" ) {
    document.writeln("La vocal " + texto.charAt(i) + " esta en la posicion: " + i + "<br>");
  }
}
