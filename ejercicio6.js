//entrada
console.log("6. Área y el volúmen de un cilindro: ")
console.log("Ingrese el valor del radio: ")
let radio=2;
console.log("Ingrese el valor de la altura: ")
let altura=10;

//proceso
const PI=3.14
let area=(2*PI*radio*altura+(2*PI*(radio * radio)))
let volumen=(PI*(radio * radio)*altura)

//salida
console.log("El área es: ")
console.log(area)
console.log("El volumen es: ")
console.log(volumen)
