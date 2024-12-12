window.addEventListener("load", () => {
  const contenedor_loader = document.querySelector(".contenedor_loader");

  Object.assign(contenedor_loader.style, {
    opacity: "0",
    visibility: "hidden",
    display: "none",
  });
});

// Declarando las variables de los inputs del modal

let Bombilla = document.getElementById("Bombilla_container-input");
let Televisor = document.getElementById("TV_container-input");
let Lavadora = document.getElementById("Lavadora_container-input");
let Nevera = document.getElementById("Nevera_container-input");
let Licuadora = document.getElementById("Licuadora_container-input");
let boton_modal = document.getElementById("calcular");
let calculado = document.getElementById("calculado");

let inputs = [Bombilla, Televisor, Lavadora, Nevera, Licuadora];

// Variables del menu
const nav_container = document.getElementById("nav-cont_header");
const open_menu = document.getElementById("open");
const close = document.getElementById("close");
const button = document.getElementById("button");

// Variables para el modal del panel
const panel = document.getElementById("category-1");
const modal = document.getElementById("modal-container");
const cerrar_modal = document.getElementById("cerrar_modal");

let regresar = document.getElementById("regresar");
let galeria = document.getElementById("modal-container_productos");
let cont_productos = document.getElementById("cont_productos");

regresar.addEventListener("click", () => {
  Object.assign(galeria.style, {
    display: "inline",
    alignItems: "center",
    bottom: "0",
  });
});

panel.addEventListener("click", () => {
  modal.style.display = "flex";
});

cerrar_modal.addEventListener("click", function () {
  modal.style.display = "none";

  calculado.style.display = "none";
  document.getElementById("tipo_modal").style.display = "block";
  inputs.forEach((input) => (input.value = ""));
});

document.getElementById("cerrar_modal_productos").addEventListener('click',()=>{
  Object.assign(galeria.style,{
    display:"none"
  })
})

boton_modal.addEventListener("click", function () {
  let cantidad_paneles_solares = document.getElementById(
    "cantidad_paneles_solares"
  );
  let potencia_bateria = document.getElementById("potencia_bateria");
  let input_valor = 0;

  let ejecutado = false;

  for (i = 0; i <= 4; i++) {
    if (inputs[i].value != "" && inputs[4].value != "") {
      for (j = 0; j <= 4; j++) {
        if (inputs[j].value != "" && !ejecutado) {
          inputs[0].value = parseInt(inputs[0].value) * 90; // Valor en Vatios de las Bombilla
          inputs[1].value = parseInt(inputs[1].value) * 260; // Valor en Vatios del TV
          inputs[2].value = parseInt(inputs[2].value) * 1200; // Valor en Vatios de la lavadora
          inputs[3].value = parseInt(inputs[3].value) * 300; // Valor en vatios de la Nevera
          inputs[4].value = parseInt(inputs[4].value) * 200; // Valor en vatios de la Licuadora
          ejecutado = true;
        }
      }
      calculado.style.display = "block";
      document.getElementById("tipo_modal").style.display = "none";

      input_valor += parseInt(inputs[i].value);

      cantidad_paneles_solares.innerText = `${Math.ceil(
        input_valor / 550
      )} Paneles Solares`;
      potencia_bateria.innerText = `${input_valor} kW de Energía`;
    } else {
      alert("tienes que llenar los valores");
      break;
    }
  }

  let cotizemos = document.getElementById("cotizemos");

  cotizemos.addEventListener("click", function () {
    window.location.assign(
      `https://api.whatsapp.com/send?phone=573124600196&text=Hola%20Power%20Energy%20%26%20Supplies%2C%20me%20gustar%C3%ADa%20realizar%20un%20proyecto%20con%20*${Math.ceil(
        input_valor / 550
      )}%20paneles%20solares*%20y%20*${input_valor}%20kW%20de%20bater%C3%ADa*%20%E2%9A%A1`
    );
  });
});

// Funcionalidad responsive del menu

open_menu.addEventListener("click", function () {
  if (window.innerWidth <= "980") {
    nav_container.appendChild(button);
    button.style.display = "block";
  }

  //   Estilos desde JS

  close.style.display = "block";
  nav_container.style.display = "flex";
  open_menu.style.display = "none";
});

close.addEventListener("click", function () {
  nav_container.style = "none";
  close.style.display = "none";
  open_menu.style.display = "block";
});
