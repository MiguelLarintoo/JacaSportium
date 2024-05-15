function validarFormulario() {
    var nombre = document.getElementById("Nombre").value;
    var email = document.getElementById("Mail").value;
    var contrasenia = document.getElementById("Contra").value;
    var dni = document.getElementById("Dni").value;
    var dinero = document.getElementById("Dinero").value;
    var seleccion = document.getElementById("Seleccionable").value;

    // Validar que todos los campos estén llenos    
    if (nombre == "" || email == "" || contrasenia == "" || dni == "" || dinero == "" || seleccion == "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    } else {
        alert("El formulario ha sido enviado correctamente.");
        return true;
    }
}

function validarFormulario() {

    // BUSCAMOS Y GUARDAMOS LA INFORMACIÓN MEDIANTE DOM
    //Creamos una constante, luego hacemos referencia a document.getElementByid ponermos el nombre del campo y el valor
    const nombre = document.getElementById("Nombre").value;
    const Email = document.getElementById("Mail").value;
    const Contrasenia = document.getElementById("Contra").value;
    const dni = document.getElementById("Dni").value;
    const dinero = document.getElementById("Dinero").value;
    const seleccion = document.getElementById("Seleccionable").value;
    



    //CREAMOS UN ARRAY PARA GUARDAR LOS ERORRES
    let errores = [];

    //2º COMPROBACIONES 

    //1.ESCRIBIMOS NOMBRE 
    if (nombre === "") {
        errores.push("Por favor, ingrese su nombre.");
    }

    //2. Email tiene que contener @
    if (Email.indexOf("@") === -1) {
        errores.push("Por favor, ingresa una dirección de correo electrónico válida.");
    }

    //3. Contraseña contiene más de 8 caracteres
    if (Contrasenia < 8) {
        errores.push("por favor, ingrese una contraseña correcta con más de 8 caracteres")
    }


    //4. Verificar si el DNI tiene 8 dígitos
    if (!/^\d{8}$/.test(dni)) {
        errores.push("Por favor, ingresa un DNI válido de 8 dígitos.");
    }

    //5. Verifica que el dinero no sea menor que 0 o 0
    if (dinero <= 0) {
        errores.push("Por favor, ingresa una cantidad de dinero válida y positiva.")

    //6.Verificamos que la opción nunca está vacia 
    if (seleccion === "") {
        errores.push("Por favor, selecciona una opción.");
    } 
        
    


        if (errores.length > 0) {
            mostrarErrores(errores);
            return false;
        }

        return true;

    }

    function mostrarErrores(errores) {

        let divErrores = document.getElementById("errores");
        divErrores.innerHTML = "";
        let ul = document.createElement("ul");
        divErrores.style.display = "block";
        errores.forEach(function (error) {

            let li = document.createElement("li");
            li.textContent = error;

            ul.appendChild(li)

        });
        divErrores.appendChild(ul);
    }
}
