# Examen 1er trimestre BBDD

1º de DAM en ESCAV Granada

Nombre: Estiven Jesus Camacho Armijos

Fecha: 19/12/2023

En el ejercicio que hemos hecho su funcionalidad principal es escribir palabras que se van añadiendo a la lista, se puede borrar, y se pueden sacar aleatoriamente una de las palabras, en este caso participantes.
Para esto necesitamos un HTML, un css y un js.

Primero en el HTML, cuando tengamos su estructura lo que necesitamos es poner siempre un link que nos direcionará al css para que se ejecute, este va debajo del tittle, y luego antes del final del body un script donde se ejecutara nuestro script.js.En el body es crear 3 botones y un input de texto dentro de un div al cual llamamos container. Luego un H1, dentro de un div al cual llamaremos left, y debajo otro div al cual llamaremos resultado que sera para cuando se guarde cada participante que escribamos.

En CSS, empezaremos poniendo lo de siempre que se ejecutara en el HTML, es decir el *{}, donde estará el padding y el margin, que es para que haya espacio y margenes en el HTML. Luego importante utilizar un :root, el cual nos permite manejar el html. Tambien entraremos en el body de nuestro html, y lo que haremos es utilizar las 3 funciones clave para centrar en la pagina que es con display flex, align-items y justify-content, y posteriormente lo que haremos es entrar en cada una de las clases que hemos puesto en el HTML y modificarlas para que se centren y se pongan en forma de columna. Ademas de mofificar como seran los botones y nuestro input de texto. Las principales llamadas que hacemos en css son:
```css
*{}
:root
body
.container
.left
.resultado
button
#input_usuario
```
Este JS, está diseñado para manejar una lista de elementos, permitiendo agregar, borrar, sortear y mostrar el resultado en una página HTML. Primero lo que haremos es cargar la lista desde el localStorage con el bucle del inicio del codigo, ademas de que crea un elemento <p> por cada elemento en la lista. Luego tenemos la funcion ``añadir``, que se encarga de agregar un nuevo elemento en la lista, ademas de actualizar la lista en el localStorage. Tambien tenemos la funcion `` borrar`` que se encarga de borrar todos los elementos de la lista, incluyendo la lista del localStorage. La funcion ``random`` recibe un array y devuelve un elemento aleatorio de ese array. La funcion ``sortear`` elige un ganador aleatorio de la lista apartir de la funcion que hemos utilizado antes. Y por ultimo he añadido una funcion llamanda ``capturarTecla`` que lo que hara es llamar a la función cuando se presione la tecla que hemos puesto, en este caso el Enter.

Para poder ver el resultado de la pagina, entra al siguiente enlace : [aqui](https://camachoo.neocities.org/Examen%201%C2%BATrimestre%20BBDD/)
