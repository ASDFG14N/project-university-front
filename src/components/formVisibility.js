export const idInput = "name";

//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
export const formVisibility = () => {
  const fondoOscuroExistente = document.getElementById("fondoOscuro");

  if (!fondoOscuroExistente) {
    const fondoOscuro = document.createElement("div");
    fondoOscuro.id = "fondoOscuro";

    fondoOscuro.style.position = "fixed";
    fondoOscuro.style.top = "0";
    fondoOscuro.style.left = "0";
    fondoOscuro.style.width = "100%";
    fondoOscuro.style.height = "100%";
    fondoOscuro.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    fondoOscuro.style.zIndex = "40";

    fondoOscuro.addEventListener("click", () => {
      document.body.removeChild(fondoOscuro);
      document.querySelector(".contForm").classList.add("hidden");
    });

    document.querySelector(".hidden").classList.remove("hidden");
    document.body.appendChild(fondoOscuro);
  }
};
