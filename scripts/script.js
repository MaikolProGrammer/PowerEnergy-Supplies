var nav_container = document.getElementById("nav-cont_header");
var open_menu = document.getElementById("open");
var close = document.getElementById("close");
var button = document.getElementById("button");


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
