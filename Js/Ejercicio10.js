
// 10- Realiza un script que pida número de 
// filas y columnas y escriba una tabla. 
// Dentro de cada una de las celdas deberá 
// escribirse un número consecutivo en orden 
// descendente. Si, por ejemplo, la tabla es 
// de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Ingrese el numero de filas de la tabla: "));
const columnas = parseInt(prompt("Ingrese el numero de columnas de la tabla: "));
let numero = filas*columnas;

document.writeln(`
  <table>
    <tbody>`)
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.writeln(`<tr>`)
  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
    document.writeln(`<td>${numero}</td>`)
    numero--
  }
  document.writeln(`</tr>`)
}
document.writeln(`
    </tbody>
  </table>`)