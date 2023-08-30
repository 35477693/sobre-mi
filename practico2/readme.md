# Juego: Piedra, Papel o Tijera

Este es un juego interactivo de "Piedra, Papel o Tijera" creado con HTML, CSS y JavaScript.

## Cómo Jugar

1. Ingresa tu nombre en el cuadro de texto y haz click en el botón "Enviar".
2. Selecciona tu jugada (Piedra, Papel o Tijera) haciendo click en una de las imágenes.
3. Una vez hayas hecho tu elección, aparecerá un botón que dice "Jugada de la PC".
4. Al hacer click en ese botón, la computadora revelará su elección y se determinará el ganador.
5. El juego se juega en varias rondas hasta que un jugador alcance 3 puntos o se hayan jugado 5 rondas. En ese momento, se anunciará el ganador.

## Detalles de Implementación

### HTML

Se utilizó un diseño sencillo con contenedores que agrupan cada imagen junto con su etiqueta correspondiente. Se proporciona un campo para ingresar el nombre del jugador, botones para enviar el nombre y reiniciar el juego, y un marcador para mostrar los puntos.

### CSS

- **Estilos generales**: Se definen estilos para la página en general, el fondo, la fuente y los colores.
- **Input y botones**: Se estilizan los campos de entrada y los botones para que sean interactivos y atractivos.
- **Imágenes**: Las imágenes tienen estilo para que sean interactivas al pasar el cursor sobre ellas, mostrando una animación suave.
- **Retroalimentación visual**: Cuando el jugador selecciona una opción, esta se resalta con un borde azul.

### JavaScript

- **Inicialización**: Se establecen varias variables.
- **Función validarNombre()**: Se utiliza para asegurarse de que el jugador haya ingresado un nombre antes de comenzar a jugar.
- **Imágenes**: Cuando el jugador hace click en una imagen (haciendo su elección), se resalta esa imagen y se muestra el botón "Jugada de la PC".
- **Determinación del ganador**: Basado en la elección del jugador y la elección aleatoria de la computadora, se determina quién gana.
- **Actualizar marcador**: Cada vez que se determina un ganador, se actualiza el marcador.
- **Finalización del juego**: Después de cierto número de rondas o si un jugador alcanza 3 puntos, se determina el ganador general y se muestra un mensaje.
- **Reinicio del juego**: Se proporciona una botón para reiniciar el juego y comenzar de nuevo.

## Optimización del código
- Se agregó un botón para la "Jugada de la "PC".
- Se agregó una alerta para contabilizar las rondas.

## Autor 
- Vega Alberto Emanuel