function validarFormulario() {
    var nombre = document.getElementById('Nombre').value;
    var correo = document.getElementById('Mail').value;
    var contrasena = document.getElementById('Contra').value;
    var dni = document.getElementById('Dni').value;
    var terminos = document.getElementById('terms').checked;

    var errores = [];

    if (nombre === '') {
      document.getElementById('errorNombre').innerHTML = 'Por favor, ingresa tu nombre.';
    } else {
      document.getElementById('errorNombre').innerHTML = '';
    }

    if (correo === '') {
      document.getElementById('errorCorreo').innerHTML = 'Por favor, ingresa tu correo electrónico.';
    } else {
      document.getElementById('errorCorreo').innerHTML = '';
    }

    if (contrasena === '') {
      document.getElementById('errorContrasena').innerHTML = 'Por favor, ingresa tu contraseña.';
    } else {
      document.getElementById('errorContrasena').innerHTML = '';
    }

    if (dni === '') {
      document.getElementById('errorDni').innerHTML = 'Por favor, ingresa tu DNI.';
    } else {
      document.getElementById('errorDni').innerHTML = '';
    }

    if (!terminos) {
      errores.push('Por favor, acepta los términos y condiciones.');
    }

    if (errores.length > 0) {
      var mensajeError = '';
      for (var i = 0; i < errores.length; i++) {
        mensajeError += '<p>' + errores[i] + '</p>';
      }
      document.getElementById('errores').innerHTML = mensajeError;
      return false;
    }

    return true;
  }
