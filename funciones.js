// Declarativas 
// En las funciones declarativas, utilizamos la palabra 
//reservada function al inicio para poder declarar la función:

function mifuncion () {
    return 3;
}
// Expresión 
//En la expresión de función, la declaración se inicia con la palabra
//reservada var, donde se generará una variable que guardará una función anónima.
var mifuncion = function(a,b) {
    return a + b;
}

mifuncion();

function saludare(estudiante) {
    console.log(estudiante);
}
saludare("jei")

function saludare(estudiante) {
    console.log(`hola ${estudiante}`);
}
saludare("jei")

function sumar(a,b) {
    var resultado = a +b;
    return resultado;
}
sumar(1,2);

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.