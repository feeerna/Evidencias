console.log("6. Suma o multiplicacionde dos numeros")
console.log(" Ingrese dos numeros diferentes")

let num1 = -5
let num2 = -7

// Si hay un numero megativo se suman de lo contrario se multiplica

if (num1 > 0 & num2 > 0) {
    multiplicacion = num1 * num2 
    console.log(" Como no existe ningun numero negativo, el resultado de la multiplicacion es :" + multiplicacion)
}

else {
    suma = num1 + num2
    console.log(" Como si existe un numero negativo, el resultado de la suma es :" + suma)
}