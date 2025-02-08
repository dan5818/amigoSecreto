// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Challenge amigo secreto
//elaborado por Daniel Anguiano Mujica
//definimos las funcionalidades:

//agrega nombres:los ususarios escribiran el nombre de un amigo en un campo de texto y lo agregaran a una lista visible al hacer clic en adicionar
let amigos = [];//creamos el array como indica el trello
//implementamos la funcion para agregar amigo
function agregarAmigo(){//tomamos la funcion del index 
    //captura el valor del campo de entrada
    let namigo = document.getElementById("amigo").value.trim();

    //validamos la entrada  
    // Verifica si no está vacío
    if(namigo != ''){//compara entre si hay caracteres o no hay y de ahi decide que operacion continua deacuerdo a las opciones restantes en cada caso
       
        amigos.push(namigo);//agrega el valor inamigo a el array de nombre amigos y nos suma un nombre a la lista
        document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<p>${amigo}</p>`).join('');// con esta linea le damos formato y desplegamos el nombre capturado para que se muestre abajo en forma de lista 
    
    } else {//en caso de que no se escriba nada o eeste vacio el campo nos despliega mensaje de error para ingresar un nombre valido
        alert("Por favor, ingresa un nombre válido.");
    }
    //despues de terminar la comparacion pero aun dentro de la funcion agregar amigo
    //colocamos el codigo que limpia el campo de entrada
    document.getElementById("amigo").value = "";  // Limpiar el campo
   
}

//valida entrada: si el campo esta vacio muestra alerta pididendo nombre valido
// visualiza la lista: los nombres ingresados apareceran en una lista debajo del campo de entrada
//sorteo aleatoreo: al hacer clic en el boton "sortear amigo", se seleccionara aleatoriamente un nombre de la lista y se mostrara en la pagina
