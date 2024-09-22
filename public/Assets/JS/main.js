// Usa el Modo Estricto.

"use strict";

// Se declara una variable y se llama del documento HTML para usarla en un metodo de escucha

const form = document.getElementById("formulario");

/* Se hace uso de una expresión regular donde los inputs al ser enviados deberan tener
    letras de la a la z en minusculas o (|) de la A a la Z en mayusculas*/

const pattern = /[a-z]|[A-Z]/;

// Se utiliza el metodo addEventListener para escuchar el submit del formulario (envio).

form.addEventListener("submit", (event) => {
  /* Se declaran variables, se asignas los valores ingresados al momento de enviar el formulario,
  luego, se utiliza localStorage para guardar estos valores
   en el almacenamiento local del navegador. */

  const nombreUser = nombre.value;

  const contraseniaUser = contrasenia.value;

  localStorage.setItem("Nombre", nombreUser);

  localStorage.setItem("Contraseña", contraseniaUser);

  // Función Flecha, que evita la superposición de otros mensajes de error o los mismos

  const mostrarMensaje = (
    elementoAgregar,
    tipodeErrorPorClase,
    mostrarMensaje,
  ) => {
    // Verifica si ya existe un elemento con la clase especificada

    if (!elementoAgregar.querySelector(tipodeErrorPorClase)) {
      // Si no existe, agregar el mensaje de error al final del elemento

      elementoAgregar.appendChild(mostrarMensaje);

      // Establecer un temporizador para eliminar el mensaje de error después de 2 segundos

      setTimeout(() => {
        elementoAgregar.removeChild(mostrarMensaje);
      }, 2000);
    }
  };

  if (
    (!contrasenia.value || !pattern.test(contrasenia.value)) &&
    (!nombre.value || !pattern.test(nombre.value))
  ) {
    event.preventDefault();
    mostrarMensaje(
      mensajeNombre,
      ".container-error_ambosCampos",
      ambosCamposVacios,
    );
  } else if (!nombre.value) {
    event.preventDefault();
    mostrarMensaje(
      mensajeNombre,
      ".container-error_nombre",
      mensajeNombreAgregado,
    );
  } else if (contrasenia.value.trim().length < 8) {
    event.preventDefault();
    mostrarMensaje(
      mensajeContrasenia,
      ".container-error_contrasenia",
      mensajeNombreAgregadoOchoCaracteres,
    );
  } else if (!contrasenia.value) {
    event.preventDefault();
    mostrarMensaje(
      mensajeContrasenia,
      ".container-error_contrasenia",
      mensajeContraseniaAgregado,
    );
  } else if (contrasenia.value !== contraseniaRepeat.value) {
    event.preventDefault();
    mostrarMensaje(
      mensajeContrasenia,
      ".mensaje-error-contrasenia_repeat",
      contraseniaRepeatMensaje,
    );
  }
});
