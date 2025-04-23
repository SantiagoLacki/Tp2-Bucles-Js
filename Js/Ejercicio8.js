
// 8- Crea script para generar pirámide 
// siguiente con los números del 1 al número 
// que indique el usuario (no mayor de 50) 
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let caracteres;

do {
  caracteres = prompt("Ingrese el numero de filas que quiere imprimir (entre 1-50): ");
  
  if (isNaN(caracteres) || caracteres < 1 || caracteres > 50) {
    alert("Debes ingresar un NUMERO entre 1 y 50: ")
  }

  else {
    for (let i = 1; i <= caracteres; i++) {
      for (let caracteres = 1; caracteres <= i ; caracteres++) {
        document.writeln(caracteres);
      }
      document.writeln("<br>")
    }
  }
}
while (isNaN(caracteres) || caracteres < 1 || caracteres > 50)
