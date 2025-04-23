
// 14- Realiza un script que pida una cadena de 
// texto y lo muestre poniendo el signo – entre 
// cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, 
// deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const texto = prompt("Ingrese un texto corto: ");

for (let i = 0; i < texto.length ; i++) {
  document.writeln(texto.charAt(i) + " - ")
}
document.writeln("<br>")

// Este lo genera sin el guion al final (Nose como sacarlo de otra manera)
for (let i = 0; i < texto.length-1 ; i++) {
  document.writeln(texto.charAt(i) + " - ")
}
document.writeln(texto.charAt(texto.length-1));
