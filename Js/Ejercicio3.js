
// 3- Realiza un script que pida cadenas de 
// texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse 
// todas las cadenas concatenadas con un 
// guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

document.writeln("Script que imprime las cadenas de texto ingresadas, separadas por un guion: <br>");

let parrafo = ""

do {
  parrafo = prompt("Ingrese un texto: ");
  if (parrafo !== null && parrafo !== undefined) {
    parrafo += parrafo
    parrafo += " - "
  }
  document.writeln(parrafo);
}
while (confirm("¿Desea ingresar otro parrafo?"));