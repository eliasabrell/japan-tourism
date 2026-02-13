document.addEventListener("DOMContentLoaded", function () {
  const transitions = document.querySelectorAll(".transition");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  transitions.forEach((transition) => {
    observer.observe(transition);
  });
});