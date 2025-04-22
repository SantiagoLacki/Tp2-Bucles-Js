
// 7- Haz un script que escriba una pirámide 
// inversa de los números del 1 al número que 
// indique el usuario (no mayor de 50) de la 
// siguiente forma : (suponiendo que indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let linea;
let numero = ""

linea = parseInt(prompt("Ingrese numero para las lineas de la piramide invertida (Entre 1-60): "));

do {
  if ( linea < 1 || linea > 50 ) {
    alert("Profavor ingrese un numero entre (1-60).")
    linea = parseInt(prompt("Ingrese numero para las lineas de la piramide invertida (Entre 1-60): "));
  }
  
  else {
    for (let i = 0; i < linea; i++) {
      numero += linea
    }
    document.writeln(`<p>${numero}</p>`);
    numero = ""; 
    linea = linea - 1;
  }
}
while (linea != isNaN(linea))
