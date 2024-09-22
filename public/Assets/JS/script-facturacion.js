"use strict";

const sections = document.querySelectorAll(".articulo-dos .section-display");
const dropdownAnchors = document.querySelectorAll(".dropdown__anchor");
const dropdownLinks = document.querySelectorAll(".dropdown__li");
const sectionNone = document.querySelector(".section-none");
const elementos = document.querySelectorAll(".especial");
const listaDescarga = document.querySelectorAll(".link_descarga");
const animacionI = document.querySelector(".bx");
const containerIgualdad = document.querySelectorAll(".li_especial");

listaDescarga.forEach((event) => {
  event.addEventListener("mouseover", () => {
    animacionI.classList.add("bx-tada");
  });

  event.addEventListener("mouseout", () => {
    animacionI.classList.remove("bx-tada");
  });
});

elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const contenedor = elemento.querySelector(".contenedor");
    contenedor.classList.toggle("animate__fadeInDown");
    contenedor.classList.toggle("imagen-centro");
    elemento.classList.toggle("especial-mente");
    elemento.classList.toggle("especial");
    elemento.classList.toggle("imagen");
  });
});

dropdownAnchors.forEach((anchor, index) => {
  anchor.addEventListener("click", () => {
    sections.forEach((section, indx) => {
      if (index === indx) {
        if (section.style.display === "block") {
          section.style.display = "none";
          sectionNone.style.display = "block";
        } else {
          section.style.display = "block";
          sectionNone.style.display = "none";
        }
      } else {
        section.style.display = "none";
      }
    });
  });
});

dropdownLinks.forEach((li, index) => {
  containerIgualdad.forEach((seleccionEspecial, idx) => {
    seleccionEspecial.classList.remove("li_especial");
    li.addEventListener("click", () => {
      if (index === idx) {
        seleccionEspecial.classList.toggle("li_especial");
      } else {
        seleccionEspecial.classList.remove("li_especial");
      }
    });
  });
});
