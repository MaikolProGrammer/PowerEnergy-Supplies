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
var nav_container = document.getElementById("nav-cont_header");
var open_menu = document.getElementById("open");
var close = document.getElementById("close");
var button = document.getElementById("button");

// Variables para el modal del panel
var panel = document.getElementById("category-1");
var modal = document.getElementById("modal-container");
var cerrar_modal = document.getElementById("cerrar_modal");

panel.addEventListener("click", function () {
  modal.style.display = "flex";
});

cerrar_modal.addEventListener("click", function () {
  modal.style.display = "none";

  calculado.style.display = "none";
  document.getElementById("tipo_modal").style.display = "block";
  inputs[0].value = 0;
  inputs[1].value = 0;
  inputs[2].value = 0;
  inputs[3].value = 0;
  inputs[4].value = 0;
});

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

  cotizemos.addEventListener("click",function(){
    window.location.assign("https://www.youtube.com");
  })
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
