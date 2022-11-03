// RETO 1Crear funcion para verificar si un número es par o no
// Parámetros( número a verificar)
// Return(string si es par o no)


function par(numero){

    if(numero % 2 == 0){
        console.log("El número " + numero + " es par");
    }else {
        console.log("El número " + numero + " es impar");
    }
    //return console.log();
}

par(8)

//Reto 02
//Crear un programa para verificar la edad de un usuario
//Debe ser mayor a 18 para un resultado positivo
//Párametro: Año de nacimiento del usuario
//Return: Mensaje

const hoy =new Date();
let añoActual= hoy.getFullYear();

function mayorEdad(añoNac,){
    edad = añoActual - añoNac;
        if(edad <= 18) {
        mensaje= " Pasale papito, Eres mayor de edad";
    } else {
        mensaje= "Ujules, puedes ir a la choza de los pequeñines";
    }
    return mensaje;
}
mayorEdad(2020)
console.log(mensaje)
