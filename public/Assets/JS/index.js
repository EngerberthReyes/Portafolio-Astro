/* 'use strict'; es una declaración que se utiliza en JavaScript
para indicar que el código se ejecutara en modo estricto [Más Riguroso, Más Restricciones]*/

"use strict";

// Declaración de variables y elementos del DOM

const nombre = document.getElementById("input-usuario");

const contrasenia = document.getElementById("input-contrasenia");

const contraseniaRepeat = document.getElementById("input-contrasenia_repeat");

const contraseniaRepeatMensaje = document.createElement("p");

const btnEnviar = document.getElementById("input-enviar");

const mensajeNombre = document.getElementById("input-mensaje__nombre");

const mensajeContrasenia = document.getElementById(
  "input-mensaje__contrasenia",
);

const contraseniaRegistrada = document.getElementById(
  "input-mensaje__contrasenia-registrada",
);

const mensajeContraseniaRegistrada = document.createElement("p");

const mensajeNombreAgregado = document.createElement("p");

const mensajeContraseniaAgregado = document.createElement("p");

const mensajeNombreAgregadoOchoCaracteres = document.createElement("p");

const ambosCamposVacios = document.createElement("p");

// Configuración de los mensajes de error

// Contraseña no coincide

contraseniaRepeatMensaje.classList.add("mensaje-error-contrasenia_repeat");

contraseniaRepeatMensaje.innerText = "Las Contraseñas No Coinciden.";

// Contraseña ingresada no es correcta

mensajeContraseniaRegistrada.classList.add(
  "container-error_contrasenia-registrada",
);

mensajeContraseniaRegistrada.innerText =
  "La Contraseña Ingresada No es Correcta";

// Falta ingresar nombre de usuario

mensajeNombreAgregado.classList.add("container-error_nombre");

mensajeNombreAgregado.innerText = "Debes Introducir un Nombre de Usuario.";

// Falta ingresar contraseña

mensajeContraseniaAgregado.classList.add("container-error_contrasenia");

mensajeContraseniaAgregado.innerText = "Debes Introducir Una Contraseña.";

// Contraseña debe tener 8 caracteres o más

mensajeNombreAgregadoOchoCaracteres.classList.add(
  "container-error_contrasenia",
);

mensajeNombreAgregadoOchoCaracteres.innerText =
  "Introduzca Una Contraseña Que Sea o Tenga Más de 8 Caracteres.";

// Ambos campos son obligatorios

ambosCamposVacios.classList.add("container-error_ambosCampos");

ambosCamposVacios.innerText = "Todos Los Campos Son Obligatorios.";
