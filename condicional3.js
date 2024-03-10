console.log("3. Determianr entre tres numeros cual es el mayor y el menor")
console.log (" Ingrese tres numeros enteros diferentes ")

let num1 = 2
let num2 = 4
let num3 = 1

if (num1 < num2) {
    menor = num1
}
else {
    menor = num2 
}

if (menor < num3) {
    menor = menor 
}
else {
    menor = num3 
}
if (num1 > num2) {
    mayor = num1
}
else {
    mayor = num2
}

if (mayor > num3) {
    mayor = mayor
} 
else {
    mayor = num3
}
console.log (" El numero menor es : " + menor)
console.log (" El numero mayor es : " + mayor)