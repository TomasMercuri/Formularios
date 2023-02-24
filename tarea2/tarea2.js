const $botonSubmit = document.querySelector(`#submit`);

$botonSubmit.onclick = function () {
    const nombreDelUsuario = document.querySelector(`#nombre-usuario`).value;
    const segundoNombreDelUsuario = document.querySelector(`#segundo-nombre-usuario`).value;
    const apellidoDelUsuario = document.querySelector(`#apellido-usuario`).value;
    const edadUsuario = Number(document.querySelector(`#edad-usuario`).value);
    let tituloDelFormulario = document.querySelector(`#title`);

    if(tituloDelFormulario.textContent.length < 16) {
        tituloDelFormulario.textContent += ` ${nombreDelUsuario}`;
    }

    let mostrarInformacion = document.querySelector(`.informacion`);
    let mostrarNombreUsuario = document.querySelector(`.informacion #mostrar-nombre-usuario`);
    let mostrarSegundoNombreUsuario = document.querySelector(`.informacion #mostrar-segundo-nombre-usuario`);
    let mostrarApellidoUsuario = document.querySelector(`.informacion #mostrar-apellido-usuario`);
    let mostrarEdadUsuario = document.querySelector(`.informacion #mostrar-edad-usuario`);

    if(nombreDelUsuario != "") {
        mostrarNombreUsuario.textContent = nombreDelUsuario;
        mostrarInformacion.style.background = `#fff`;
    }
    
    if(segundoNombreDelUsuario != "") {
        mostrarSegundoNombreUsuario.textContent = segundoNombreDelUsuario;
        mostrarInformacion.style.background = `#fff`;
    }

    if(apellidoDelUsuario != "") {
        mostrarApellidoUsuario.textContent = apellidoDelUsuario;
        mostrarInformacion.style.background = `#fff`;
    }

    if(edadUsuario > 0) {
        mostrarEdadUsuario.textContent = edadUsuario;
        mostrarInformacion.style.background = `#fff`;
    }

    const $botonReset = document.querySelector(`#reset`);

    $botonReset.onclick = function () {
        tituloDelFormulario.textContent = "Bienvenido!";
        mostrarInformacion.style.background = `none`;
        mostrarNombreUsuario.textContent = "";
        mostrarSegundoNombreUsuario.textContent = "";
        mostrarApellidoUsuario.textContent = "";
        mostrarEdadUsuario.textContent = "";
    }



    return false;
}