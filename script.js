// Seleccionamos los elementos
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

let operacion = "";

// Recorremos todos los botones
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "C") {
      // Limpiar pantalla
      operacion = "";
      pantalla.value = "";
    } else if (valor === "=") {
      try {
        // Evaluamos la operación
        operacion = eval(operacion);
        pantalla.value = operacion;
      } catch {
        pantalla.value = "Error";
        operacion = "";
      }
    } else {
      // Agregar valor a la operación
      operacion += valor;
      pantalla.value = operacion;
    }
  });
});