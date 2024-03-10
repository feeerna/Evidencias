console.log("6. año bisiesto")
console.log (" Ingrese un año")
year = 1987

if ((year % 4==0) & (year % 100 != 0 || year % 400 == 0)) {
    console.log (" El año ingresado es bisiesto")
}
else {
    console.log(" El año ingresado no es bisiesto")
}