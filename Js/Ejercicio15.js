
// 15- Realiza un script que cuente el número 
// de vocales que tiene un texto.

const texto = prompt("Ingrese un texto corto: ");
let cantVocales = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u" ) {
    cantVocales = cantVocales + 1 
  }
}
document.writeln("La cantidad de vocales que tiene el texto : " + texto + " es: " + cantVocales)