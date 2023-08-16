/* Función para validar si los operandos ingresados son números válidos */
function validarOperandos(operando1, operando2){
 if(isNaN(operando1) || isNaN(operando2) || operando1 === "" || operando2 === ""){
    alert("Ingrese valores numéricos válidos.");
 return false;
 }
 return true
}

/* Función para realizar la operación matemática seleccionada */
function calcular(){
 const operando1 = document.getElementById("operando1").value;
 const operando2 = document.getElementById("operando2").value;

if(!validarOperandos(operando1, operando2)) return;

const operador = document.getElementById("operador").value;
let resultado = 0;

switch (operador) {
 case "+":
    resultado = parseFloat(operando1) + parseFloat(operando2);
    break;
 case "-":
    resultado = parseFloat(operando1) - parseFloat(operando2);
    break;
 case "*":
    resultado = parseFloat(operando1) * parseFloat(operando2);
    break;
 case "/":
    if(operando2 == "0"){
     alert("División por cero no es válida.");
    return;
    }
    resultado = parseFloat(operando1) / parseFloat(operando2);
    break;
}

/* Resultados extremadamente grandes o pequeños */
if(resultado > Number.MAX_SAFE_INTEGER || resultado < Number.MIN_SAFE_INTEGER){
    alert("El resultado es demasiado grande o pequeño.");
    return;
}
 document.getElementById("valorResultado").innerText = resultado;
}

/* Para borrar los valores de los campos de texto y el resultado */
function borrarCampos(){
document.getElementById("operando1").value = "";
document.getElementById("operando2").value = "";
document.getElementById("valorResultado").innerText = "";
}
