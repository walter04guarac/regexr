
const palabras = ["xylofono", "Manzana", "Xenón", "xilófono", "Perro", "Xilofón",
 "Ximena","Xavier","Conejo"];

const regex = /\bX\w*/i;

const palabrasConX = palabras.filter(palabra => regex.test(palabra));

console.log("Palabras que comienzan con 'X':", palabrasConX);
