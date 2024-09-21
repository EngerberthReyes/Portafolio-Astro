"use strict";

const containerBtn = document.querySelector(".container-switch");
const body = document.body;
const flecha = document.getElementById("flecha");
const linkRedireccionar = document.querySelectorAll(".link_redireccionamiento");
const articuloPrincipal = document.querySelectorAll(".articulo-principal");
const articuloPrincipalDos = document.querySelectorAll(
  ".articulo-principal__informacion"
);
const header = document.querySelector(".header-container");
const btnWhite = document.querySelector(".luna");
const btnBlack = document.querySelector(".sol");
const imagenesArticulos = document.querySelectorAll(".imagen");

containerBtn.style.justifyContent = "flex-start";
containerBtn.style.backgroundColor = "#fdfdfd";
containerBtn.style.outline = "4px solid #000000";
body.classList.add("light-mode");
header.classList.add("light-mode");
header.style.backgroundColor = "#fdfdfd";

linkRedireccionar.forEach(elemento => {
  elemento.classList.add("light-mode");
})
articuloPrincipal.forEach((elemento) => {
  elemento.classList.add("light-mode");
});

function transition() {
  btnWhite.style.opacity = "1";
  btnWhite.style.transform = "translateX(0)";
  btnBlack.style.opacity = "0";
  btnBlack.style.transform = "translateX(100px)";
  setTimeout(() => {
    btnWhite.style.opacity = "0";
    btnWhite.style.transform = "translateX(0)";
    btnBlack.style.opacity = "1";
    btnBlack.style.transform = "translateX(0)";
  }, 1500);
}

transition();

flecha.style.opacity = "0";

window.addEventListener("scroll", () => {
  if (scrollY >= 192) {
    flecha.style.opacity = "1";
    flecha.style.transform = "translateY(0px)";
  } else {
    flecha.style.opacity = "0";
    flecha.style.transform = "translateY(70px)";
  }
});

flecha.addEventListener("click", () => {
  scrollTo(0, -scrollY);
});

containerBtn.addEventListener("click", () => {
  const btnEstiloActual =
    getComputedStyle(containerBtn).backgroundColor === "rgb(253, 253, 253)"
      ? true
      : false;
  //Modo Oscuro
  if (btnEstiloActual) {
    containerBtn.style.backgroundColor = "#000000";
    containerBtn.style.outline = "4px solid #ffffff";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    header.classList.add("dark-mode");
    header.classList.remove("light-mode");
    header.style.backgroundColor = "#0f0f0f";
    articuloPrincipal.forEach((elemento) => {
      elemento.style.backgroundColor = "#000000";
      elemento.style.color = "#ffffff";
      elemento.style.outline = "4px solid #ffffff";
      elemento.style.borderRadius = "20px";
    });
    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = "#000000";
      elemento.style.color = "#ffffff";
      elemento.style.outline = "4px solid #ffffff";
      elemento.style.borderRadius = "20px";
    });

    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = "0px 0px 10px 0 #fdfdfd";
    });


    header.style.boxShadow = "rgba(255 255 255 / 46%) 0px 0px 13px 0px";

    linkRedireccionar.forEach(elemento => {
      elemento.style.outline = "4px solid #ffffff";
          elemento.classList.add("dark-mode");
    elemento.classList.remove("light-mode");
    })

    function transition() {
      btnWhite.style.opacity = "0";
      btnWhite.style.transform = "translateX(0px)";
      btnBlack.style.opacity = "1";
      btnBlack.style.transform = "translateX(0)";
      setTimeout(() => {
        btnWhite.style.opacity = "1";
        btnWhite.style.transform = "translateX(50px)";
        btnBlack.style.opacity = "0";
        btnBlack.style.transform = "translateX(67px)";
      }, 200);
    }
    transition();
  } else {
    //Modo Claro
    containerBtn.style.backgroundColor = "#fdfdfd";
    articuloPrincipal.forEach((elemento) => {
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.backgroundColor = "#00ecb6b5";
      elemento.style.color = "#000000";
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.color = "#000000";
      elemento.style.backgroundColor = "#00ecb6b5";
      elemento.style.outline = "none";
    });
    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = "#00ecb6b5";
      elemento.style.color = "#000000";
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.outline = "none";
    });
    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = "0px 0px 10px 0 #000000";
    });

    containerBtn.style.outline = "4px solid #000000";
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    header.style.backgroundColor = "#fdfdfd";
    header.classList.remove("dark-mode");
    header.classList.add("light-mode");
        linkRedireccionar.forEach(elemento => {
      elemento.style.outline = "4px solid #000000";
    })
    header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

    function transition() {
      btnWhite.style.opacity = "1";
      btnWhite.style.transform = "translateX(50px)";
      btnBlack.style.opacity = "0";
      btnBlack.style.transform = "translateX(57px)";
      setTimeout(() => {
        btnWhite.style.opacity = "0";
        btnWhite.style.transform = "translateX(17px)";
        btnBlack.style.opacity = "1";
        btnBlack.style.transform = "translateX(0)";
      }, 200);
    }
    transition();
  }
});