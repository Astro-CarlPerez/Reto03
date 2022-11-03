//  Bad practices
// no se puede definir la variable con un número
var uno = 1;

// no se pueden agregar unidades
var second = 1;

// Why doesn't it work?
// no funciona porque no puede tener el valor "if"
// mala práctica nombrarla con if y condition sin dar contexto
var if_condition = true;


// Should equal formula for wild wings
// mala practica al nomrbrarla con el camelCase
// falta ; al final
// falta declaracion de variables "wings" y "buffalo"
var buffaloWings = "wings" + " " + "buffalo";


// Null variable
// nombre con el que se declara. *se podría usar "nulo"
// falta ;
// valor null sin la N mayúscula
var nulo = null;


// All variables should equal 1
// para declarar variables con el mismo valor se hace uso del signo "="
// se recorre elm valor 1 hasta el final para mejorar el contexto.
var uno = one = wan = uma = um = 1;


// It's broken
// El texto a mostrar debe ir dentro de los parentesis
console.log(".1");


// Console.log para mostrar [area] de un cuadrado
// x se interpreta como referencia a una variable "x", el operador para multiplicar a usar es "*"
console.log(ladoa * ladob);

// Should equal 4
// se asigna el valor de la variable "four" usando el mismo tipo de variable (númericos 2 + 2)
// o 4.
var four = 2 + 2;

// Doesn't work for math problems
// pi se declaró como texto, cuando debe ser númerico
var pi = 3.141516;