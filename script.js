const form = document.querySelector(".formulario");
const cartel = document.getElementById("cartel");
const saludo = document.getElementById("saludo");
const imagen = document.getElementById("imagenSaludo");
const out = document.getElementById("out");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = form.nombre.value;
  const edad = Number(form.edad.value);

  if (edad >= 18) {
    saludo.textContent = `Bienvenido ${nombre}, tienes acceso al evento`;
    imagen.src =
      "https://marketplace.canva.com/_fZ4s/MAFkWh_fZ4s/1/tl/canva-check-box-icon-MAFkWh_fZ4s.png";
    cartel.style.display = "flex";
    form.style.display = "none";
    saludo.classList.remove("font-red");
    saludo.classList.add("font-green");
  } else {
    saludo.textContent = `Lo sentimos ${nombre}, debes ser mayor de edad`;
    imagen.src =
      "https://cdn1.iconfinder.com/data/icons/zake-miscellaneous-006/64/x_cross_no_clear-512.png";
    cartel.style.display = "flex";
    form.style.display = "none";
    saludo.classList.remove("font-green");
    saludo.classList.add("font-red");
  }
});

out.addEventListener("click", function () {
  cartel.style.display = "none";
  form.style.display = "flex";
  form.reset();
});
