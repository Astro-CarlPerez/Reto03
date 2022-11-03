// Programa para calcular edad de un gato


let edadMichi = 4;
// 0 - 2 años gatunos = 24 años humanos
// 1 año gatuno extra = 4 años humanos extra


function convertirEdad(edadMichi) {
    let edadHumana = "";
    edadHumana = (edadMichi >=1 && edadMichi <= 2) ? edadMichi*12 : ((edadMichi - 2) *4)+24;
    return "Hola humano, tu michi tiene " + edadMichi + " año(s), lo que equivale a "+ edadHumana + " años humanos!";
}

console.log(convertirEdad(edadMichi));

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/E
