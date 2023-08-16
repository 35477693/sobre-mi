# 🧮 Calculadora Web Simple

## Introducción:
Este proyecto es una representación de una calculadora web básica diseñada para realizar operaciones matemáticas fundamentales: suma, resta, multiplicación y división.

## 📋 Pruebas Realizadas:
Para asegurar el correcto funcionamiento de la calculadora, se llevaron a cabo las siguientes pruebas:

* Operación de suma: 5 + 5
- Resultado esperado: 10
- Resultado obtenido: 10

* Operación de división: 10 / 2
- Resultado esperado: 5
- Resultado obtenido: 5

* Operación de multiplicación: 7 * 6
- Resultado esperado: 42
- Resultado obtenido: 42

* Operación de resta: 9 - 3
- Resultado esperado: 6
- Resultado obtenido: 6

* Operación de dividir por "0" : 10 / 0
- Resultado esperado: "División por cero no es válida"
- Resultado obtenido: "División por cero no es válida"

### Errores y Correcciones:
Durante las pruebas, se encontró el siguiente comportamiento inesperado:

- Al dividir por cero, la calculadora inicialmente no presentaba ningún mensaje. 

- **Solución implementada**: Se añadió una condición en la función calcular para detectar divisiones por cero y mostrar una alerta al usuario.

Con estas pruebas y correcciones, se asegura que la calculadora funciona como se espera.

## Autor ✒️
- Vega Alberto Emanuel
