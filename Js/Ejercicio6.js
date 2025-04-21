
// 6- Realiza un script que escriba una 
// pirámide del 1 al 30 de la siguiente 
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

let linea = 1;
let numero = ""

do {
  for (let i = 0; i < linea; i++) {
    numero += linea
  }
  document.writeln(`<p>${numero}</p>`);
  numero = ""; 
  linea = linea + 1;
}
while (linea <= 30)
