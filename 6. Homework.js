const hamburguesa = 1050;
const ensalada = 150;
const papasFritas = 600;
const alfajor = 750;

if (ensalada < hamburguesa) {
  console.log("La ensalada es más sana.");
} else if (ensalada < papasFritas) {
  console.log("La ensalada es más sana.");
} else if (ensalada < alfajor) {
  console.log("La ensalada es más sana.");
} else {
  console.log("Lo siento, no puedes comer nada de todo esto.");
}

//**

if (papasFritas < ensalada) {
  console.log("Las papas fritas son la opción más sana.");
} else if (papasFritas < alfajor) {
  console.log("Las papas fritas son la opción más sana.");
} else if (papasFritas < hamburguesa) {
  console.log("Las papas fritas son la opción más sana.");
} else {
  console.log("Lo siento, no puedes comer nada de todo esto.");
}

//**/

if (alfajor < hamburguesa) {
  console.log("El alfajor es más sano.");
} else if (alfajor < ensalada) {
  console.log("El alfajor es más sano.");
} else if (alfajor < papasFritas) {
  console.log("El alfajor es más sano.");
} else {
  console.log("Lo siento, no puedes comer nada de todo esto.");
}
