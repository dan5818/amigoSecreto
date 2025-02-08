<h1>Aqui encontraremos la descripcion del codigo y mas sobre el Challenge amigo secreto</h1>
# README

## Challenge Amigo Secreto

Este desafío tiene como objetivo mejorar las habilidades de lógica de programación, implementando un sistema básico para realizar un sorteo de "amigo secreto". El código permite a los usuarios agregar amigos a una lista y luego realizar un sorteo aleatorio para asignar a cada persona un amigo secreto.

### Descripción del Proyecto

El sistema tiene las siguientes funcionalidades principales:

- **Agregar Amigos:** Los usuarios pueden escribir un nombre en un campo de texto y agregarlo a una lista visible al hacer clic en el botón "Adicionar".
- **Visualizar Lista de Amigos:** Los nombres ingresados aparecen en una lista visible en la página.
- **Sorteo Aleatorio:** Al hacer clic en el botón "Sortear Amigo", se selecciona un nombre de la lista de manera aleatoria y se muestra en la página como el amigo secreto de la persona.




### Funcionalidades Implementadas

1. **Agregar Amigo:**
   - El usuario puede escribir un nombre en el campo de texto y presionar el botón "Adicionar".
   - El nombre ingresado es agregado a un arreglo llamado `amigos` y se actualiza la lista visible en la página.
   - Si el campo está vacío, el sistema muestra una alerta pidiendo que se ingrese un nombre válido.

2. **Actualizar la Lista de Amigos:**
   - Se muestra la lista de amigos en el HTML como un conjunto de elementos `<p>` con el nombre de cada amigo.
   - La función `actualizarLista` actualiza esta lista cada vez que se agrega un nuevo amigo.

3. **Sorteo Aleatorio:**
   - El sistema permite realizar un sorteo de amigo secreto. Si la lista está vacía, se muestra una alerta informando que no se puede realizar el sorteo.
   - Si la lista tiene amigos, se genera un número aleatorio para seleccionar un amigo de la lista y se muestra el resultado en la página.

### Código

```javascript
let amigos = []; // Creación del arreglo de amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let namigo = document.getElementById("amigo").value.trim();

    if (namigo != '') {
        amigos.push(namigo);
        document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<p>${amigo}</p>`).join('');
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }

    document.getElementById("amigo").value = "";  // Limpiar el campo
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para realizar el sorteo aleatorio de amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. No se puede realizar el sorteo.");
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para el sorteo.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "El nombre de tu amigo secreto es: " + amigoSorteado;
}
```

### Requisitos

- Este código debe ejecutarse en un entorno de navegador, ya que utiliza manipulación del DOM (Document Object Model) para interactuar con el usuario.
- El proyecto requiere un archivo HTML con los elementos básicos para que las funciones de JavaScript interactúen correctamente.

### Uso

1. Abre el archivo HTML en tu navegador.
2. Escribe un nombre en el campo de texto y haz clic en "Adicionar" para agregarlo a la lista.
3. Realiza el sorteo de amigo secreto haciendo clic en "Sortear Amigo".

### Contribuciones

Este desafío fue creado por **Daniel Anguiano Mujica**. Si deseas contribuir al proyecto, puedes realizar mejoras en la funcionalidad, el diseño o añadir nuevas características.