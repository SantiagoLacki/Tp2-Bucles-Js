
// 4- Realiza un script que pida números 
// hasta que se pulse “cancelar”. Si no es 
// un número deberá indicarse con un «alert» 
// y seguir pidiendo números. Al salir con 
// “cancelar” deberá indicarse la suma total 
// de los números introducidos.

document.writeln("Script que imprime la suma total de los numeros ingresados: <br>");

let numero = 0;
let suma = 0;

do {
  numero = prompt("Ingrese un numero: ");
  
  if (numero === null || numero === undefined || isNaN(numero) || numero === "") {
    alert("Porfavor ingrese un numero!")
  }
  else {
    suma += parseInt(numero);
  }
}
while (confirm("¿Desea sumar otro numero? "));

document.writeln("El resultado de sumar todos los numeros ingresados es: " + suma);