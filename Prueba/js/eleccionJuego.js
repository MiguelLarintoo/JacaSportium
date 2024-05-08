// Función para verificar si el usuario es mayor de 18 años
function verificarEdad() {
    // Mostrar una alerta preguntando al usuario si tiene más de 18 años
    var respuesta = confirm("¿Eres mayor de 18 años?");
    
    // Verificar la respuesta del usuario
    if (respuesta) {
        // Si el usuario confirma que es mayor de 18 años, no hacemos nada
        alert("¡Bienvenido! Disfruta del sitio.");
    } else {
        // Si el usuario no es mayor de 18 años, redirigir a una búsqueda de gatos en Google
        window.location.href = "https://www.google.com/search?q=gatos";
    }
}

// Llamar a la función para verificar la edad cuando se carga la página
window.onload = verificarEdad;
