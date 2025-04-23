
// 12- Realiza un script que genere un número 
// aleatorio entre 1 y 99

const min = 1;
const max = 99;

const numeroAleatorio = Math.random() * (max - min);
const numeroAleatorio2 = Math.floor(Math.random() * (max - min));

document.writeln("Numero aleatorio (entre 1-99) con decimal : ", numeroAleatorio, "<br>");
document.writeln("Numero aleatorio (entre 1-99) entero : ", numeroAleatorio2);