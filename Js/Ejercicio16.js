
// 16- Realiza un script que pida una cadena de 
// texto y la devuelva al revés. Es decir, si 
// tecleo “hola que tal” deberá mostrar 
// “lat euq aloh”.

const texto = prompt("Ingrese un texto corto: ");
let textoInvertido = "";

for (let i = texto.length; i >= 0; i--) {
  textoInvertido += texto.charAt(i); 
}
document.writeln("El texto original es: " + texto + "<br>");
document.writeln("El texto invertido es: " + textoInvertido);