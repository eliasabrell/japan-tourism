document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobile = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
      navMobile.classList.toggle("ativo");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const headerHidden = document.querySelector("header");
  let lastScrollY = window.scrollY; // Minha variável para armazenar a posição inicial

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      // Se a posição atual é maior que a anterior, então está descendo
      headerHidden.classList.add("hidden");
    } else {
      // Se a posição atual não é maior que a anterior, então está subindo
      headerHidden.classList.remove("hidden");
    }

    // Armazenar a posição anterior para a próxima comparação
    lastScrollY = currentScrollY;
  });
});